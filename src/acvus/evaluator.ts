import {
    NodeKind, ExprKind,
    type TemplateNode, type Expr,
    type ContextValue, type TemplateContext,
} from './types';
import { getBuiltin } from './builtins';

/**
 * Evaluate an acvus template AST with the given context.
 */
export function evaluateTemplate(nodes: TemplateNode[], context: TemplateContext): string {
    const env = new EvalEnv(context);
    return env.evalNodes(nodes);
}

class EvalEnv {
    private context: TemplateContext;
    private variables: Map<string, ContextValue> = new Map();

    constructor(context: TemplateContext) {
        this.context = context;
    }

    evalNodes(nodes: TemplateNode[]): string {
        let output = '';
        for (const node of nodes) {
            output += this.evalNode(node);
        }
        return output;
    }

    private evalNode(node: TemplateNode): string {
        switch (node.kind) {
            case NodeKind.Text:
                return node.value;

            case NodeKind.Comment:
                return '';

            case NodeKind.Expr: {
                const value = this.evalExpr(node.expr);
                return this.valueToString(value);
            }

            case NodeKind.Iteration: {
                const iterable = this.evalExpr(node.iterable);
                if (!Array.isArray(iterable)) return '';

                let output = '';
                for (const item of iterable) {
                    this.variables.set(node.binding, item);
                    output += this.evalNodes(node.body);
                }
                this.variables.delete(node.binding);
                return output;
            }

            case NodeKind.Match: {
                const subject = this.evalExpr(node.subject);
                for (const branch of node.branches) {
                    if (branch.pattern === null) {
                        // Catch-all
                        return this.evalNodes(branch.body);
                    }
                    const pattern = this.evalExpr(branch.pattern);
                    if (this.valuesEqual(subject, pattern)) {
                        return this.evalNodes(branch.body);
                    }
                }
                return '';
            }
        }
    }

    evalExpr(expr: Expr): ContextValue {
        switch (expr.kind) {
            case ExprKind.Literal:
                return expr.value;

            case ExprKind.ContextRef:
                return this.context[expr.name] ?? null;

            case ExprKind.Variable: {
                if (this.variables.has(expr.name)) {
                    return this.variables.get(expr.name)!;
                }
                // Fall back to context
                return this.context[expr.name] ?? null;
            }

            case ExprKind.FieldAccess: {
                const obj = this.evalExpr(expr.object);
                if (obj !== null && typeof obj === 'object' && !Array.isArray(obj)) {
                    return (obj as Record<string, ContextValue>)[expr.field] ?? null;
                }
                return null;
            }

            case ExprKind.Pipe: {
                const input = this.evalExpr(expr.input);
                const builtin = getBuiltin(expr.fn);
                if (builtin) {
                    const args = expr.args.map(a => this.evalExprOrLambda(a));
                    return builtin(input, ...args);
                }
                return input;
            }

            case ExprKind.FnCall: {
                const builtin = getBuiltin(expr.name);
                if (builtin) {
                    const args = expr.args.map(a => this.evalExprOrLambda(a));
                    if (args.length > 0) {
                        return builtin(args[0], ...args.slice(1));
                    }
                    return builtin(null);
                }
                return null;
            }

            case ExprKind.Lambda:
                // Return a JS function for use with filter/map etc.
                return this.makeLambda(expr.param, expr.body);

            case ExprKind.BinaryOp:
                return this.evalBinaryOp(expr.op, expr.left, expr.right);

            case ExprKind.UnaryOp:
                if (expr.op === '!') {
                    return !this.isTruthy(this.evalExpr(expr.operand));
                }
                return null;

            case ExprKind.CatchAll:
                return true;
        }
    }

    private evalExprOrLambda(expr: Expr): any {
        if (expr.kind === ExprKind.Lambda) {
            return this.makeLambda(expr.param, expr.body);
        }
        return this.evalExpr(expr);
    }

    private makeLambda(param: string, body: Expr): (item: ContextValue) => ContextValue {
        return (item: ContextValue) => {
            const prev = this.variables.get(param);
            this.variables.set(param, item);
            const result = this.evalExpr(body);
            if (prev !== undefined) {
                this.variables.set(param, prev);
            } else {
                this.variables.delete(param);
            }
            return result;
        };
    }

    private evalBinaryOp(op: string, left: Expr, right: Expr): ContextValue {
        const l = this.evalExpr(left);
        const r = this.evalExpr(right);

        switch (op) {
            case '==': return this.valuesEqual(l, r);
            case '!=': return !this.valuesEqual(l, r);
            case '<': return (typeof l === 'number' && typeof r === 'number') ? l < r : false;
            case '>': return (typeof l === 'number' && typeof r === 'number') ? l > r : false;
            case '<=': return (typeof l === 'number' && typeof r === 'number') ? l <= r : false;
            case '>=': return (typeof l === 'number' && typeof r === 'number') ? l >= r : false;
            case '&&': return this.isTruthy(l) && this.isTruthy(r);
            case '||': return this.isTruthy(l) || this.isTruthy(r);
            case '+':
                if (typeof l === 'number' && typeof r === 'number') return l + r;
                return String(l ?? '') + String(r ?? '');
            case '-': return (typeof l === 'number' && typeof r === 'number') ? l - r : 0;
            case '*': return (typeof l === 'number' && typeof r === 'number') ? l * r : 0;
            case '/': return (typeof l === 'number' && typeof r === 'number' && r !== 0) ? l / r : 0;
            case '%': return (typeof l === 'number' && typeof r === 'number' && r !== 0) ? l % r : 0;
            default: return null;
        }
    }

    private valuesEqual(a: ContextValue, b: ContextValue): boolean {
        if (a === b) return true;
        if (a === null || b === null) return false;
        if (typeof a !== typeof b) return String(a) === String(b);
        if (typeof a === 'object' && typeof b === 'object') {
            return JSON.stringify(a) === JSON.stringify(b);
        }
        return a === b;
    }

    private isTruthy(value: ContextValue): boolean {
        if (value === null || value === false || value === 0 || value === '') return false;
        if (Array.isArray(value)) return value.length > 0;
        return true;
    }

    private valueToString(value: ContextValue): string {
        if (value === null) return '';
        if (typeof value === 'string') return value;
        if (typeof value === 'number' || typeof value === 'boolean') return String(value);
        if (Array.isArray(value)) return value.map(v => this.valueToString(v)).join('');
        if (typeof value === 'object') return JSON.stringify(value);
        return String(value);
    }
}
