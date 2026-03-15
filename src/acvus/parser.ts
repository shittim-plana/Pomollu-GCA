import { tokenize, tokenizeExpr, SegmentType, ExprTokenType } from './lexer';
import type { ExprToken } from './lexer';
import {
    NodeKind, ExprKind,
    type TemplateNode, type TextNode, type ExprNode, type IterationNode,
    type MatchNode, type MatchBranch, type CommentNode,
    type Expr, type LiteralExpr, type ContextRefExpr, type VariableExpr,
    type FieldAccessExpr, type PipeExpr, type LambdaExpr, type FnCallExpr,
    type BinaryOpExpr, type UnaryOpExpr, type CatchAllExpr,
} from './types';

/**
 * Parse an acvus template source string into a list of AST nodes.
 */
export function parse(source: string): TemplateNode[] {
    const segments = tokenize(source);
    return parseSegments(segments, 0).nodes;
}

interface ParseResult {
    nodes: TemplateNode[];
    consumed: number;
}

function parseSegments(segments: ReturnType<typeof tokenize>, start: number): ParseResult {
    const nodes: TemplateNode[] = [];
    let i = start;

    while (i < segments.length) {
        const seg = segments[i];

        switch (seg.type) {
            case SegmentType.Text:
                nodes.push({ kind: NodeKind.Text, value: seg.value } as TextNode);
                i++;
                break;

            case SegmentType.Comment:
                nodes.push({ kind: NodeKind.Comment, value: seg.value } as CommentNode);
                i++;
                break;

            case SegmentType.CloseBlock:
                return { nodes, consumed: i - start + 1 };

            case SegmentType.CatchAll:
                // Catch-all in match context - handled by match parsing
                return { nodes, consumed: i - start };

            case SegmentType.Expr: {
                const exprStr = seg.value;

                // Check for iteration: "item in @list"
                const iterMatch = exprStr.match(/^(\w+)\s+in\s+(.+)$/);
                if (iterMatch) {
                    const binding = iterMatch[1];
                    const iterableExpr = parseExpr(iterMatch[2]);
                    i++;
                    const bodyResult = parseSegments(segments, i);
                    i += bodyResult.consumed;
                    nodes.push({
                        kind: NodeKind.Iteration,
                        binding,
                        iterable: iterableExpr,
                        body: bodyResult.nodes,
                    } as IterationNode);
                    break;
                }

                // Check for match pattern: "value" = @context  or  value =
                const matchPatternMatch = exprStr.match(/^(.+?)\s*=\s*(.*)$/);
                if (matchPatternMatch && !exprStr.includes('==') && !exprStr.includes('!=')
                    && !exprStr.includes('<=') && !exprStr.includes('>=')) {
                    // This is a match expression
                    const subjectStr = matchPatternMatch[2].trim();
                    const patternStr = matchPatternMatch[1].trim();

                    // Parse as match block
                    const subject = subjectStr ? parseExpr(subjectStr) : null;
                    const branches: MatchBranch[] = [];

                    // First branch
                    const firstPattern = parseExpr(patternStr);
                    i++;
                    const firstBody = parseSegments(segments, i);
                    i += firstBody.consumed;
                    branches.push({ pattern: firstPattern, body: firstBody.nodes });

                    // Continue parsing more branches
                    while (i < segments.length) {
                        const nextSeg = segments[i];

                        if (nextSeg.type === SegmentType.CloseBlock) {
                            i++;
                            break;
                        }

                        if (nextSeg.type === SegmentType.CatchAll) {
                            i++;
                            const catchBody = parseSegments(segments, i);
                            i += catchBody.consumed;
                            branches.push({ pattern: null, body: catchBody.nodes });
                            // Expect close block
                            if (i < segments.length && segments[i].type === SegmentType.CloseBlock) {
                                i++;
                            }
                            break;
                        }

                        if (nextSeg.type === SegmentType.Expr) {
                            const branchMatch = nextSeg.value.match(/^(.+?)\s*=\s*$/);
                            if (branchMatch) {
                                const branchPattern = parseExpr(branchMatch[1].trim());
                                i++;
                                const branchBody = parseSegments(segments, i);
                                i += branchBody.consumed;
                                branches.push({ pattern: branchPattern, body: branchBody.nodes });
                                continue;
                            }
                        }

                        break;
                    }

                    // Build match node - use the subject from first branch or infer
                    const matchSubject = subject || { kind: ExprKind.ContextRef, name: 'input' } as ContextRefExpr;
                    nodes.push({
                        kind: NodeKind.Match,
                        subject: matchSubject,
                        branches,
                    } as MatchNode);
                    break;
                }

                // Regular expression
                const expr = parseExpr(exprStr);
                nodes.push({ kind: NodeKind.Expr, expr } as ExprNode);
                i++;
                break;
            }

            default:
                i++;
                break;
        }
    }

    return { nodes, consumed: i - start };
}

/**
 * Parse an expression string into an Expr AST node.
 */
export function parseExpr(source: string): Expr {
    const tokens = tokenizeExpr(source);
    const parser = new ExprParser(tokens);
    return parser.parseExpression();
}

class ExprParser {
    private tokens: ExprToken[];
    private pos: number = 0;

    constructor(tokens: ExprToken[]) {
        this.tokens = tokens;
    }

    private peek(): ExprToken {
        return this.tokens[this.pos] || { type: ExprTokenType.EOF, value: '', pos: -1 };
    }

    private advance(): ExprToken {
        const token = this.tokens[this.pos];
        this.pos++;
        return token;
    }

    private expect(type: ExprTokenType): ExprToken {
        const token = this.advance();
        if (token.type !== type) {
            throw new Error(`Expected ${type} but got ${token.type} (${token.value}) at pos ${token.pos}`);
        }
        return token;
    }

    parseExpression(): Expr {
        return this.parsePipe();
    }

    /** pipe: or_expr ("|" ident ("(" args ")")?)* */
    private parsePipe(): Expr {
        let left = this.parseLambda();

        while (this.peek().type === ExprTokenType.Pipe) {
            this.advance(); // consume |
            const fnName = this.expect(ExprTokenType.Ident).value;
            let args: Expr[] = [];

            if (this.peek().type === ExprTokenType.LParen) {
                this.advance(); // (
                args = this.parseArgList();
                this.expect(ExprTokenType.RParen);
            }

            left = {
                kind: ExprKind.Pipe,
                input: left,
                fn: fnName,
                args,
            } as PipeExpr;
        }

        return left;
    }

    /** lambda: or_expr ("->" lambda | or_expr)? */
    private parseLambda(): Expr {
        const expr = this.parseOr();

        if (this.peek().type === ExprTokenType.Arrow) {
            this.advance(); // ->
            let paramName: string;
            if (expr.kind === ExprKind.Variable) {
                paramName = expr.name;
            } else if (expr.kind === ExprKind.ContextRef) {
                paramName = expr.name;
            } else if (expr.kind === ExprKind.Literal && typeof expr.value === 'string') {
                paramName = expr.value;
            } else {
                throw new Error(`Invalid lambda parameter: expected identifier, got ${expr.kind}`);
            }
            const body = this.parseLambda();
            return { kind: ExprKind.Lambda, param: paramName, body } as LambdaExpr;
        }

        return expr;
    }

    /** or: and ("||" and)* */
    private parseOr(): Expr {
        let left = this.parseAnd();
        while (this.peek().type === ExprTokenType.Or) {
            this.advance();
            const right = this.parseAnd();
            left = { kind: ExprKind.BinaryOp, op: '||', left, right } as BinaryOpExpr;
        }
        return left;
    }

    /** and: equality ("&&" equality)* */
    private parseAnd(): Expr {
        let left = this.parseEquality();
        while (this.peek().type === ExprTokenType.And) {
            this.advance();
            const right = this.parseEquality();
            left = { kind: ExprKind.BinaryOp, op: '&&', left, right } as BinaryOpExpr;
        }
        return left;
    }

    /** equality: comparison (("==" | "!=") comparison)* */
    private parseEquality(): Expr {
        let left = this.parseComparison();
        while (this.peek().type === ExprTokenType.Eq || this.peek().type === ExprTokenType.Neq) {
            const op = this.advance().type === ExprTokenType.Eq ? '==' : '!=';
            const right = this.parseComparison();
            left = { kind: ExprKind.BinaryOp, op, left, right } as BinaryOpExpr;
        }
        return left;
    }

    /** comparison: addition (("<" | ">" | "<=" | ">=") addition)* */
    private parseComparison(): Expr {
        let left = this.parseAddition();
        const compOps = [ExprTokenType.Lt, ExprTokenType.Gt, ExprTokenType.Lte, ExprTokenType.Gte];
        while (compOps.includes(this.peek().type)) {
            const token = this.advance();
            const opMap: Record<string, '==' | '!=' | '<' | '>' | '<=' | '>='> = {
                [ExprTokenType.Lt]: '<',
                [ExprTokenType.Gt]: '>',
                [ExprTokenType.Lte]: '<=',
                [ExprTokenType.Gte]: '>=',
            };
            const right = this.parseAddition();
            left = { kind: ExprKind.BinaryOp, op: opMap[token.type], left, right } as BinaryOpExpr;
        }
        return left;
    }

    /** addition: multiplication (("+" | "-") multiplication)* */
    private parseAddition(): Expr {
        let left = this.parseMultiplication();
        while (this.peek().type === ExprTokenType.Plus || this.peek().type === ExprTokenType.Minus) {
            const op = this.advance().type === ExprTokenType.Plus ? '+' : '-';
            const right = this.parseMultiplication();
            left = { kind: ExprKind.BinaryOp, op, left, right } as BinaryOpExpr;
        }
        return left;
    }

    /** multiplication: unary (("*" | "/" | "%") unary)* */
    private parseMultiplication(): Expr {
        let left = this.parseUnary();
        while (
            this.peek().type === ExprTokenType.Star ||
            this.peek().type === ExprTokenType.Slash ||
            this.peek().type === ExprTokenType.Percent
        ) {
            const token = this.advance();
            const opMap: Record<string, '*' | '/' | '%'> = {
                [ExprTokenType.Star]: '*',
                [ExprTokenType.Slash]: '/',
                [ExprTokenType.Percent]: '%',
            };
            const right = this.parseUnary();
            left = { kind: ExprKind.BinaryOp, op: opMap[token.type], left, right } as BinaryOpExpr;
        }
        return left;
    }

    /** unary: "!" unary | postfix */
    private parseUnary(): Expr {
        if (this.peek().type === ExprTokenType.Not) {
            this.advance();
            const operand = this.parseUnary();
            return { kind: ExprKind.UnaryOp, op: '!', operand } as UnaryOpExpr;
        }
        return this.parsePostfix();
    }

    /** postfix: primary ("." ident)* */
    private parsePostfix(): Expr {
        let expr = this.parsePrimary();

        while (this.peek().type === ExprTokenType.Dot) {
            this.advance(); // .
            const field = this.expect(ExprTokenType.Ident).value;
            expr = { kind: ExprKind.FieldAccess, object: expr, field } as FieldAccessExpr;
        }

        return expr;
    }

    /** primary: literal | context_ref | var_ref | ident | "(" expr ")" | "_" */
    private parsePrimary(): Expr {
        const token = this.peek();

        switch (token.type) {
            case ExprTokenType.String:
                this.advance();
                return { kind: ExprKind.Literal, value: token.value } as LiteralExpr;

            case ExprTokenType.Number:
                this.advance();
                return { kind: ExprKind.Literal, value: parseFloat(token.value) } as LiteralExpr;

            case ExprTokenType.Bool:
                this.advance();
                return { kind: ExprKind.Literal, value: token.value === 'true' } as LiteralExpr;

            case ExprTokenType.ContextRef:
                this.advance();
                return { kind: ExprKind.ContextRef, name: token.value } as ContextRefExpr;

            case ExprTokenType.VarRef:
                this.advance();
                return { kind: ExprKind.Variable, name: token.value } as VariableExpr;

            case ExprTokenType.Ident: {
                this.advance();
                const name = token.value;
                // Check if it's a function call
                if (this.peek().type === ExprTokenType.LParen) {
                    this.advance(); // (
                    const args = this.parseArgList();
                    this.expect(ExprTokenType.RParen);
                    return { kind: ExprKind.FnCall, name, args } as FnCallExpr;
                }
                // Plain identifier treated as variable
                return { kind: ExprKind.Variable, name } as VariableExpr;
            }

            case ExprTokenType.Underscore:
                this.advance();
                return { kind: ExprKind.CatchAll } as CatchAllExpr;

            case ExprTokenType.LParen: {
                this.advance(); // (
                const expr = this.parseExpression();
                this.expect(ExprTokenType.RParen);
                return expr;
            }

            default:
                // Return empty literal for unexpected tokens
                return { kind: ExprKind.Literal, value: '' } as LiteralExpr;
        }
    }

    private parseArgList(): Expr[] {
        const args: Expr[] = [];
        if (this.peek().type === ExprTokenType.RParen) return args;

        args.push(this.parseExpression());
        while (this.peek().type === ExprTokenType.Comma) {
            this.advance();
            args.push(this.parseExpression());
        }
        return args;
    }
}
