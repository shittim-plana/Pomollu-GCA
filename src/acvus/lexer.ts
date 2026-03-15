/** Token types for acvus template lexer */
export enum TokenType {
    Text = 'text',
    ExprOpen = 'expr_open',       // {{
    ExprClose = 'expr_close',     // }}
    CommentOpen = 'comment_open', // {{--
    CommentClose = 'comment_close', // --}}
    CloseBlock = 'close_block',   // {{/}}
    CatchAll = 'catch_all',       // {{_}}
}

export interface Token {
    type: TokenType;
    value: string;
    pos: number;
}

/** Segment types for first-pass lexing */
export enum SegmentType {
    Text = 'text',
    Expr = 'expr',
    Comment = 'comment',
    CloseBlock = 'close',
    CatchAll = 'catch_all',
}

export interface Segment {
    type: SegmentType;
    value: string;
    pos: number;
}

/**
 * First-pass: split template source into segments.
 * Recognizes: {{-- comment --}}, {{/}}, {{_}}, {{ expr }}
 */
export function tokenize(source: string): Segment[] {
    const segments: Segment[] = [];
    let i = 0;
    let textStart = 0;

    while (i < source.length) {
        if (source[i] === '{' && i + 1 < source.length && source[i + 1] === '{') {
            // Flush preceding text
            if (i > textStart) {
                segments.push({ type: SegmentType.Text, value: source.slice(textStart, i), pos: textStart });
            }

            const tagStart = i;
            i += 2; // skip {{

            // Comment: {{-- ... --}}
            if (source[i] === '-' && source[i + 1] === '-') {
                i += 2;
                const closeIdx = source.indexOf('--}}', i);
                if (closeIdx === -1) {
                    segments.push({ type: SegmentType.Text, value: source.slice(tagStart), pos: tagStart });
                    i = source.length;
                } else {
                    segments.push({ type: SegmentType.Comment, value: source.slice(i, closeIdx).trim(), pos: tagStart });
                    i = closeIdx + 4;
                }
                textStart = i;
                continue;
            }

            // Find closing }}
            let depth = 1;
            let exprStart = i;
            while (i < source.length && depth > 0) {
                if (source[i] === '{' && i + 1 < source.length && source[i + 1] === '{') {
                    depth++;
                    i += 2;
                } else if (source[i] === '}' && i + 1 < source.length && source[i + 1] === '}') {
                    depth--;
                    if (depth === 0) break;
                    i += 2;
                } else {
                    i++;
                }
            }

            const inner = source.slice(exprStart, i).trim();
            i += 2; // skip }}

            if (inner === '/') {
                segments.push({ type: SegmentType.CloseBlock, value: '/', pos: tagStart });
            } else if (inner === '_') {
                segments.push({ type: SegmentType.CatchAll, value: '_', pos: tagStart });
            } else {
                segments.push({ type: SegmentType.Expr, value: inner, pos: tagStart });
            }

            textStart = i;
        } else {
            i++;
        }
    }

    // Remaining text
    if (textStart < source.length) {
        segments.push({ type: SegmentType.Text, value: source.slice(textStart), pos: textStart });
    }

    return segments;
}

/** Expression tokenizer for inner expressions */
export enum ExprTokenType {
    Ident = 'ident',
    ContextRef = 'context_ref', // @name
    VarRef = 'var_ref',         // $name
    String = 'string',
    Number = 'number',
    Bool = 'bool',
    Pipe = 'pipe',              // |
    Dot = 'dot',                // .
    LParen = 'lparen',          // (
    RParen = 'rparen',          // )
    Comma = 'comma',            // ,
    Arrow = 'arrow',            // ->
    Eq = 'eq',                  // ==
    Neq = 'neq',                // !=
    Lt = 'lt',                  // <
    Gt = 'gt',                  // >
    Lte = 'lte',                // <=
    Gte = 'gte',                // >=
    And = 'and',                // &&
    Or = 'or',                  // ||
    Not = 'not',                // !
    Plus = 'plus',              // +
    Minus = 'minus',            // -
    Star = 'star',              // *
    Slash = 'slash',            // /
    Percent = 'percent',        // %
    Assign = 'assign',          // =
    In = 'in',                  // in (keyword)
    Underscore = 'underscore',  // _
    EOF = 'eof',
}

export interface ExprToken {
    type: ExprTokenType;
    value: string;
    pos: number;
}

const KEYWORDS: Record<string, ExprTokenType> = {
    'true': ExprTokenType.Bool,
    'false': ExprTokenType.Bool,
    'in': ExprTokenType.In,
};

export function tokenizeExpr(source: string): ExprToken[] {
    const tokens: ExprToken[] = [];
    let i = 0;

    while (i < source.length) {
        // Skip whitespace
        if (/\s/.test(source[i])) {
            i++;
            continue;
        }

        const pos = i;

        // Context ref: @name
        if (source[i] === '@') {
            i++;
            let name = '';
            while (i < source.length && /[a-zA-Z0-9_]/.test(source[i])) {
                name += source[i++];
            }
            tokens.push({ type: ExprTokenType.ContextRef, value: name, pos });
            continue;
        }

        // Variable ref: $name
        if (source[i] === '$') {
            i++;
            let name = '';
            while (i < source.length && /[a-zA-Z0-9_]/.test(source[i])) {
                name += source[i++];
            }
            tokens.push({ type: ExprTokenType.VarRef, value: name, pos });
            continue;
        }

        // String: "..." or '...'
        if (source[i] === '"' || source[i] === "'") {
            const quote = source[i++];
            let str = '';
            while (i < source.length && source[i] !== quote) {
                if (source[i] === '\\' && i + 1 < source.length) {
                    i++;
                    switch (source[i]) {
                        case 'n': str += '\n'; break;
                        case 't': str += '\t'; break;
                        case '\\': str += '\\'; break;
                        default: str += source[i]; break;
                    }
                } else {
                    str += source[i];
                }
                i++;
            }
            i++; // closing quote
            tokens.push({ type: ExprTokenType.String, value: str, pos });
            continue;
        }

        // Number
        if (/[0-9]/.test(source[i]) || (source[i] === '-' && i + 1 < source.length && /[0-9]/.test(source[i + 1]))) {
            let num = '';
            if (source[i] === '-') num += source[i++];
            while (i < source.length && /[0-9.]/.test(source[i])) {
                num += source[i++];
            }
            tokens.push({ type: ExprTokenType.Number, value: num, pos });
            continue;
        }

        // Two-char operators
        if (i + 1 < source.length) {
            const two = source[i] + source[i + 1];
            const twoCharOps: Record<string, ExprTokenType> = {
                '==': ExprTokenType.Eq,
                '!=': ExprTokenType.Neq,
                '<=': ExprTokenType.Lte,
                '>=': ExprTokenType.Gte,
                '&&': ExprTokenType.And,
                '||': ExprTokenType.Or,
                '->': ExprTokenType.Arrow,
            };
            if (twoCharOps[two]) {
                tokens.push({ type: twoCharOps[two], value: two, pos });
                i += 2;
                continue;
            }
        }

        // Single-char operators
        const singleCharOps: Record<string, ExprTokenType> = {
            '|': ExprTokenType.Pipe,
            '.': ExprTokenType.Dot,
            '(': ExprTokenType.LParen,
            ')': ExprTokenType.RParen,
            ',': ExprTokenType.Comma,
            '<': ExprTokenType.Lt,
            '>': ExprTokenType.Gt,
            '!': ExprTokenType.Not,
            '+': ExprTokenType.Plus,
            '-': ExprTokenType.Minus,
            '*': ExprTokenType.Star,
            '/': ExprTokenType.Slash,
            '%': ExprTokenType.Percent,
            '=': ExprTokenType.Assign,
            '_': ExprTokenType.Underscore,
        };

        if (singleCharOps[source[i]]) {
            // Special: _ as standalone catch-all vs part of identifier
            if (source[i] === '_' && i + 1 < source.length && /[a-zA-Z0-9_]/.test(source[i + 1])) {
                // Part of identifier
            } else if (singleCharOps[source[i]]) {
                tokens.push({ type: singleCharOps[source[i]], value: source[i], pos });
                i++;
                continue;
            }
        }

        // Identifiers / keywords
        if (/[a-zA-Z_]/.test(source[i])) {
            let ident = '';
            while (i < source.length && /[a-zA-Z0-9_]/.test(source[i])) {
                ident += source[i++];
            }
            if (KEYWORDS[ident]) {
                tokens.push({ type: KEYWORDS[ident], value: ident, pos });
            } else {
                tokens.push({ type: ExprTokenType.Ident, value: ident, pos });
            }
            continue;
        }

        // Unknown character - skip
        i++;
    }

    tokens.push({ type: ExprTokenType.EOF, value: '', pos: i });
    return tokens;
}
