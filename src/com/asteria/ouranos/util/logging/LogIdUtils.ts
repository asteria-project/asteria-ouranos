import { OuranosContext } from '../../core/OuranosContext';

/**
 * The <code>LogIdUtils</code> class provides static methods for build the <code>OuranosContext</code> reference passed
 * to logger to identify a log in the stack trace.
 */
export class LogIdUtils  {

    /**
     * Return the log id string for the specified context.
     * 
     * @param {OuranosContext} context the Ouranos context for which to get the log id.
     * 
     * @returns {string} the log id string for the specified context.
     */
    public static getLogId(context: OuranosContext): string {
        return `[id:${context.getId()}]`;
    }
}
