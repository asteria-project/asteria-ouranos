import 'mocha';
import { expect } from 'chai';
import { OuranosContext } from '../../../../../../src/com/asteria/ouranos/core/OuranosContext';

// Class to test:
import { LogIdUtils } from '../../../../../../src/com/asteria/ouranos/util/logging/LogIdUtils';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/utilities/LogIdUtilsTestUtils';

// Test:
describe('LogIdUtils class test', ()=> {

    describe('#getLogId()', ()=> {
        it('should return a well formatted string', ()=> {
            const context: OuranosContext = new OuranosContext(utils.NAME, utils.UUID);
            const result: string = LogIdUtils.getLogId(context);
            expect(utils.ID_PATTERN.test(result)).to.be.true;
        });
    });
});