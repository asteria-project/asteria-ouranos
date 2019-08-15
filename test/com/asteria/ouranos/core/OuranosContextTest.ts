import 'mocha';
import { expect } from 'chai';
import { OuranosLogger } from '../../../../../src/com/asteria/ouranos/util/logging/OuranosLogger';
import { OuranosProcessor } from '../../../../../src/com/asteria/ouranos/process/OuranosProcessor';

// Class to test:
import { OuranosContext } from '../../../../../src/com/asteria/ouranos/core/OuranosContext';

// Utilities:
import * as utils from '../../../../../utils/test-utils/utilities/OuranosContextTestUtils';

// Test:
describe('OuranosContext class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the OuranosContext fully qualified class name', ()=> {
            const context: OuranosContext = new OuranosContext(utils.NAME, utils.UUID);
            expect(context.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#getLogger()', ()=> {
        it('should return the reference to the Ouranos logger instance', ()=> {
            const context: OuranosContext = new OuranosContext(utils.NAME, utils.UUID);
            expect(context.getLogger()).to.equal(OuranosLogger.getLogger());
        });
    });

    describe('#constructor', ()=> {
        it('getName() should return the same name as the constructor parameter', ()=> {
            const context: OuranosContext = new OuranosContext(utils.NAME, utils.UUID);
            expect(context.getName()).to.equal(utils.NAME);
        });

        it('getId() should return the same GUID as the constructor parameter', ()=> {
            const context: OuranosContext = new OuranosContext(utils.NAME, utils.UUID);
            expect(context.getId()).to.equal(utils.UUID);
        });
    });
    
    describe('#getProcessor()', ()=> {
        it('should return a OuranosProcessor instance', ()=> {
            const context: OuranosContext = new OuranosContext(utils.NAME, utils.UUID);
            expect(context.getProcessor() instanceof OuranosProcessor).to.be.true;
        });
    });
});