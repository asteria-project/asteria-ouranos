/*!
 * This module constains utilities used by the LogIdUtils test suite.
 */

import * as uuid from 'uuid';

// Utilities:
export const NAME: string = 'contextName';
export const UUID: string = uuid.v4();
export const ID_PATTERN: RegExp = new RegExp(/^\[id:[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}\]$/i);