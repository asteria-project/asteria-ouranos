/*!
 * This module constains utilities used by the OuranosSession test suite.
 */

import { AsteriaSessionConfig } from 'asteria-gaia';

// Utilities:
// We store constants that should be defined by the OuranosSession class:
export const CLASS_NAME: string = 'com.asteria.ouranos.core::OuranosSession';
export const SESSION_CONFIG: AsteriaSessionConfig = { name: 'test-config' };
export const V4_REGEXP: RegExp = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);