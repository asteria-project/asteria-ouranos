/*!
 * This module constains utilities used by the OuranosLogger test suite.
 */

import * as logger from 'ts-log-debug';
import { OuranosLogger } from '../../../src/com/asteria/ouranos.index';

// Utilities:
export const CLASS_NAME: string = 'com.asteria.ouranos.util.logging::OuranosLogger';
export const MESSAGE: string = 'log message';
export const getLogger: Function = function(logger: OuranosLogger): logger.Logger {
    return (logger as any).LOGGER;
};