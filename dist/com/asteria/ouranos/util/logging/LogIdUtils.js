"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogIdUtils {
    static getLogId(context) {
        return `[id:${context.getId}]`;
    }
}
exports.LogIdUtils = LogIdUtils;
