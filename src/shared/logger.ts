/**
 * log,
 * error,
 * warn,
 * info,
 * debug
 */
export class Logger {
    static log(...message: any[]) {
        console.log("[Pomollu]", ...message);
    }
    static error(...message: any[]) {
        console.error("[Pomollu]", ...message);
    }   
    static warn(...message: any[]) {
        console.warn("[Pomollu]", ...message);
    }
    static info(...message: any[]) {
        console.info("[Pomollu]", ...message);
    }
    static debug(...message: any[]) {
        console.debug("[Pomollu]", ...message);
    }
}