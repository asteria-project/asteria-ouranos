/*!
 * This module constains utilities used by the OuranosProcessBuilder test suite.
 */

import { StreamProcessConfig } from 'asteria-gaia';

// Utilities:
export const CLASS_NAME: string = 'com.asteria.ouranos.util.builder::OuranosProcessBuilder';
export const getStreamProcessConfig: Function = function(): StreamProcessConfig {
    const config: StreamProcessConfig = {
        name: "configName"
    };
    return config;
};