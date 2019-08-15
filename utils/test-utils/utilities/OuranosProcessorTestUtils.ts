/*!
 * This module constains utilities used by the OuranosProcessor test suite.
 */

import * as uuid from 'uuid';
import { OuranosContext } from '../../../src/com/asteria/ouranos/core/OuranosContext';
import { StreamProcess, StreamProcessConfig } from 'asteria-gaia';
import { StreamProcessImpl } from '../classes/StreamProcessImpl';
import { OuranosProcessor } from '../../../src/com/asteria/ouranos.index';
import { ReadableStreamProcessImpl } from '../classes/ReadableStreamProcessImpl';

// Utilities:
export const NAME: string = 'contextName';
export const UUID: string = uuid.v4();
export const CONTEXT: OuranosContext = new OuranosContext(NAME, UUID);
export const CLASS_NAME: string = 'com.asteria.ouranos.process::OuranosProcessor';
export const STREAM_PROCESS_CONFIG: any = { test: 'test config' };
export const buildStreamProcess: Function = function(name: string): StreamProcess {
    const process: StreamProcess = new StreamProcessImpl();
    const config: StreamProcessConfig = {
        name: name
    };
    process.setConfig(config);
    return process;
};
export const buildReadableStreamProcess: Function = function(): StreamProcess {
    const process: StreamProcess = new ReadableStreamProcessImpl();
    const config: StreamProcessConfig = {};
    process.setConfig(config);
    return process;
};
export const getStreamProcessList: Function = function(processor: OuranosProcessor): Array<StreamProcess> {
    return (processor as any).PROCESSES;
};