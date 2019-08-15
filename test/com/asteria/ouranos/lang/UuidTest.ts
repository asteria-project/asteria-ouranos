import 'mocha';
import { expect } from 'chai';

// Class to test:
import { Uuid } from '../../../../../src/com/asteria/ouranos/lang/Uuid';

// Utilities:
import * as utils from '../../../../../utils/test-utils/utilities/UuidTestUtils';
import * as guidUtils from '../../../../../utils/test-utils/utilities/GuidTestUtils';

// Test:
describe('Uuid class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the OuranosSession fully qualified class name', ()=> {
            const uuid: Uuid = new Uuid();
            expect(uuid.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });

    describe('#v4()', ()=> {
        it('should return a valid GUID', ()=> {
            const guid: string = Uuid.v4();
            expect(guidUtils.V4_REGEXP.test(guid)).to.be.true;
        });
    });
});