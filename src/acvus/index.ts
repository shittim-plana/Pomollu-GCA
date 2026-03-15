/**
 * Acvus Template Engine for Pomollu Integration
 *
 * A lightweight TypeScript implementation of the acvus template syntax.
 * Supports core features: {{ expressions }}, @context references,
 * $variables, | pipe operations, pattern matching, and iteration.
 *
 * Reference: https://github.com/ArtBlnd/acvus
 */

export { parse } from './parser';
export { evaluateTemplate } from './evaluator';
export { getBuiltin, hasBuiltin } from './builtins';
export {
    type TemplateNode,
    type TemplateContext,
    type ContextValue,
    type AnalyzeResult,
    type EvalResult,
    type Expr,
    NodeKind,
    ExprKind,
} from './types';

import { parse } from './parser';
import { evaluateTemplate } from './evaluator';
import type { TemplateContext, AnalyzeResult, EvalResult, TemplateNode } from './types';
import { NodeKind, ExprKind } from './types';

/**
 * Evaluate an acvus template string with the given context.
 *
 * @example
 * ```ts
 * const result = evaluate('Hello {{ @name | trim }}!', { name: '  World  ' });
 * // result.output === 'Hello World!'
 * ```
 */
export function evaluate(source: string, context: TemplateContext = {}): EvalResult {
    try {
        const nodes = parse(source);
        const output = evaluateTemplate(nodes, context);
        return { output };
    } catch (e) {
        return { output: '', error: String(e) };
    }
}

/**
 * Analyze an acvus template to discover required context references and variables.
 * Useful for validation and IDE support (matches pomollu-engine's analyze API).
 */
export function analyze(source: string): AnalyzeResult {
    try {
        const nodes = parse(source);
        const contextRefs = new Set<string>();
        const variables = new Set<string>();
        collectRefs(nodes, contextRefs, variables);
        return {
            contextRefs: [...contextRefs],
            variables: [...variables],
        };
    } catch {
        return { contextRefs: [], variables: [] };
    }
}

function collectRefs(nodes: TemplateNode[], contextRefs: Set<string>, variables: Set<string>): void {
    for (const node of nodes) {
        switch (node.kind) {
            case NodeKind.Expr:
                collectExprRefs(node.expr, contextRefs, variables);
                break;
            case NodeKind.Iteration:
                collectExprRefs(node.iterable, contextRefs, variables);
                collectRefs(node.body, contextRefs, variables);
                break;
            case NodeKind.Match:
                collectExprRefs(node.subject, contextRefs, variables);
                for (const branch of node.branches) {
                    if (branch.pattern) collectExprRefs(branch.pattern, contextRefs, variables);
                    collectRefs(branch.body, contextRefs, variables);
                }
                break;
        }
    }
}

function collectExprRefs(expr: import('./types').Expr, contextRefs: Set<string>, variables: Set<string>): void {
    switch (expr.kind) {
        case ExprKind.ContextRef:
            contextRefs.add(expr.name);
            break;
        case ExprKind.Variable:
            variables.add(expr.name);
            break;
        case ExprKind.FieldAccess:
            collectExprRefs(expr.object, contextRefs, variables);
            break;
        case ExprKind.Pipe:
            collectExprRefs(expr.input, contextRefs, variables);
            for (const arg of expr.args) collectExprRefs(arg, contextRefs, variables);
            break;
        case ExprKind.Lambda:
            collectExprRefs(expr.body, contextRefs, variables);
            break;
        case ExprKind.FnCall:
            for (const arg of expr.args) collectExprRefs(arg, contextRefs, variables);
            break;
        case ExprKind.BinaryOp:
            collectExprRefs(expr.left, contextRefs, variables);
            collectExprRefs(expr.right, contextRefs, variables);
            break;
        case ExprKind.UnaryOp:
            collectExprRefs(expr.operand, contextRefs, variables);
            break;
    }
}
