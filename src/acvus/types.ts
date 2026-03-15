/** Acvus Template AST Node Types */

export enum NodeKind {
    Text = 'text',
    Expr = 'expr',
    Iteration = 'iteration',
    Match = 'match',
    Comment = 'comment',
}

export interface TextNode {
    kind: NodeKind.Text;
    value: string;
}

export interface ExprNode {
    kind: NodeKind.Expr;
    expr: Expr;
}

export interface IterationNode {
    kind: NodeKind.Iteration;
    binding: string;
    iterable: Expr;
    body: TemplateNode[];
}

export interface MatchBranch {
    pattern: Expr | null; // null = catch-all (_)
    body: TemplateNode[];
}

export interface MatchNode {
    kind: NodeKind.Match;
    subject: Expr;
    branches: MatchBranch[];
}

export interface CommentNode {
    kind: NodeKind.Comment;
    value: string;
}

export type TemplateNode = TextNode | ExprNode | IterationNode | MatchNode | CommentNode;

/** Expression Types */
export enum ExprKind {
    Literal = 'literal',
    ContextRef = 'context_ref',
    Variable = 'variable',
    FieldAccess = 'field_access',
    Pipe = 'pipe',
    Lambda = 'lambda',
    FnCall = 'fn_call',
    BinaryOp = 'binary_op',
    UnaryOp = 'unary_op',
    CatchAll = 'catch_all',
}

export interface LiteralExpr {
    kind: ExprKind.Literal;
    value: string | number | boolean;
}

/** @name - read-only context reference */
export interface ContextRefExpr {
    kind: ExprKind.ContextRef;
    name: string;
}

/** $name - mutable variable reference */
export interface VariableExpr {
    kind: ExprKind.Variable;
    name: string;
}

export interface FieldAccessExpr {
    kind: ExprKind.FieldAccess;
    object: Expr;
    field: string;
}

/** a | f(b) desugars to f(a, b) */
export interface PipeExpr {
    kind: ExprKind.Pipe;
    input: Expr;
    fn: string;
    args: Expr[];
}

/** m -> m.role == "user" */
export interface LambdaExpr {
    kind: ExprKind.Lambda;
    param: string;
    body: Expr;
}

export interface FnCallExpr {
    kind: ExprKind.FnCall;
    name: string;
    args: Expr[];
}

export interface BinaryOpExpr {
    kind: ExprKind.BinaryOp;
    op: '==' | '!=' | '<' | '>' | '<=' | '>=' | '&&' | '||' | '+' | '-' | '*' | '/' | '%';
    left: Expr;
    right: Expr;
}

export interface UnaryOpExpr {
    kind: ExprKind.UnaryOp;
    op: '!';
    operand: Expr;
}

export interface CatchAllExpr {
    kind: ExprKind.CatchAll;
}

export type Expr =
    | LiteralExpr
    | ContextRefExpr
    | VariableExpr
    | FieldAccessExpr
    | PipeExpr
    | LambdaExpr
    | FnCallExpr
    | BinaryOpExpr
    | UnaryOpExpr
    | CatchAllExpr;

/** Template context for evaluation */
export type ContextValue = string | number | boolean | null | ContextValue[] | { [key: string]: ContextValue };

export interface TemplateContext {
    [key: string]: ContextValue;
}

/** Analysis result */
export interface AnalyzeResult {
    contextRefs: string[];
    variables: string[];
}

/** Evaluation result */
export interface EvalResult {
    output: string;
    error?: string;
}
