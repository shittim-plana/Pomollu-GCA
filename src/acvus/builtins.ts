import type { ContextValue } from './types';

type BuiltinFn = (input: ContextValue, ...args: any[]) => ContextValue;

/**
 * Built-in functions matching acvus builtins.
 * Pipe syntax: value | fn(args) desugars to fn(value, args)
 */
const builtins: Record<string, BuiltinFn> = {
    // Type conversion
    to_string: (input: ContextValue): ContextValue => {
        if (input === null) return 'null';
        if (Array.isArray(input)) return JSON.stringify(input);
        if (typeof input === 'object') return JSON.stringify(input);
        return String(input);
    },
    to_int: (input: ContextValue): ContextValue => {
        if (typeof input === 'number') return Math.floor(input);
        if (typeof input === 'string') return parseInt(input, 10) || 0;
        if (typeof input === 'boolean') return input ? 1 : 0;
        return 0;
    },
    to_float: (input: ContextValue): ContextValue => {
        if (typeof input === 'number') return input;
        if (typeof input === 'string') return parseFloat(input) || 0;
        return 0;
    },

    // String operations
    trim: (input: ContextValue): ContextValue => {
        return typeof input === 'string' ? input.trim() : input;
    },
    trim_start: (input: ContextValue): ContextValue => {
        return typeof input === 'string' ? input.trimStart() : input;
    },
    trim_end: (input: ContextValue): ContextValue => {
        return typeof input === 'string' ? input.trimEnd() : input;
    },
    upper: (input: ContextValue): ContextValue => {
        return typeof input === 'string' ? input.toUpperCase() : input;
    },
    lower: (input: ContextValue): ContextValue => {
        return typeof input === 'string' ? input.toLowerCase() : input;
    },
    replace_str: (input: ContextValue, from: ContextValue, to: ContextValue): ContextValue => {
        if (typeof input !== 'string') return input;
        return input.replaceAll(String(from), String(to));
    },
    split_str: (input: ContextValue, separator: ContextValue): ContextValue => {
        if (typeof input !== 'string') return [];
        return input.split(String(separator));
    },
    contains_str: (input: ContextValue, search: ContextValue): ContextValue => {
        if (typeof input !== 'string') return false;
        return input.includes(String(search));
    },
    starts_with_str: (input: ContextValue, prefix: ContextValue): ContextValue => {
        if (typeof input !== 'string') return false;
        return input.startsWith(String(prefix));
    },
    ends_with_str: (input: ContextValue, suffix: ContextValue): ContextValue => {
        if (typeof input !== 'string') return false;
        return input.endsWith(String(suffix));
    },
    substring: (input: ContextValue, start: ContextValue, end?: ContextValue): ContextValue => {
        if (typeof input !== 'string') return input;
        const s = typeof start === 'number' ? start : 0;
        const e = typeof end === 'number' ? end : undefined;
        return input.substring(s, e);
    },
    len_str: (input: ContextValue): ContextValue => {
        if (typeof input !== 'string') return 0;
        return input.length;
    },
    repeat_str: (input: ContextValue, count: ContextValue): ContextValue => {
        if (typeof input !== 'string') return input;
        return input.repeat(typeof count === 'number' ? count : 0);
    },

    // List operations
    len: (input: ContextValue): ContextValue => {
        if (Array.isArray(input)) return input.length;
        if (typeof input === 'string') return input.length;
        return 0;
    },
    filter: (input: ContextValue, predicate: any): ContextValue => {
        if (!Array.isArray(input) || typeof predicate !== 'function') return input;
        return input.filter(predicate);
    },
    map: (input: ContextValue, mapper: any): ContextValue => {
        if (!Array.isArray(input) || typeof mapper !== 'function') return input;
        return input.map(mapper);
    },
    find: (input: ContextValue, predicate: any): ContextValue => {
        if (!Array.isArray(input) || typeof predicate !== 'function') return null;
        return input.find(predicate) ?? null;
    },
    reduce: (input: ContextValue, reducer: any, initial?: ContextValue): ContextValue => {
        if (!Array.isArray(input) || typeof reducer !== 'function') return input;
        return initial !== undefined ? input.reduce(reducer, initial) : input.reduce(reducer);
    },
    any: (input: ContextValue, predicate: any): ContextValue => {
        if (!Array.isArray(input) || typeof predicate !== 'function') return false;
        return input.some(predicate);
    },
    all: (input: ContextValue, predicate: any): ContextValue => {
        if (!Array.isArray(input) || typeof predicate !== 'function') return false;
        return input.every(predicate);
    },
    reverse: (input: ContextValue): ContextValue => {
        if (!Array.isArray(input)) return input;
        return [...input].reverse();
    },
    flatten: (input: ContextValue): ContextValue => {
        if (!Array.isArray(input)) return input;
        return input.flat();
    },
    join: (input: ContextValue, separator?: ContextValue): ContextValue => {
        if (!Array.isArray(input)) return input;
        const sep = typeof separator === 'string' ? separator : '';
        return input.map(v => v === null ? '' : String(v)).join(sep);
    },
    contains: (input: ContextValue, value: ContextValue): ContextValue => {
        if (!Array.isArray(input)) return false;
        return input.includes(value);
    },

    // Utility
    unwrap: (input: ContextValue): ContextValue => {
        return input === null ? '' : input;
    },
};

export function getBuiltin(name: string): BuiltinFn | undefined {
    return builtins[name];
}

export function hasBuiltin(name: string): boolean {
    return name in builtins;
}
