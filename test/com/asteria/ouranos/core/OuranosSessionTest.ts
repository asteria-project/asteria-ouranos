import 'mocha';
import { expect } from 'chai';

// Class to test:
import { OuranosSession } from '../../../../../src/com/asteria/ouranos/core/OuranosSession';
import { AsteriaContext } from 'asteria-gaia';

// Utilities:
import * as utils from '../../../../../utils/test-utils/utilities/OuranosSessionTestUtils';

// Test:
describe('OuranosSession class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the OuranosSession fully qualified class name', ()=> {
            const session: OuranosSession = new OuranosSession(utils.SESSION_CONFIG);
            expect(session.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#getContext()', ()=> {
        it('should return a context with the same name as the config name', ()=> {
            const session: OuranosSession = new OuranosSession(utils.SESSION_CONFIG);
            const context: AsteriaContext = session.getContext();
            expect(context.getName()).to.equal(utils.SESSION_CONFIG.name);
        });

        it('should return a context with a valid GUID', ()=> {
            const session: OuranosSession = new OuranosSession(utils.SESSION_CONFIG);
            const context: AsteriaContext = session.getContext();
            const guid: string = context.getId();
            expect(utils.V4_REGEXP.test(guid)).to.be.true;
        });
    });
});