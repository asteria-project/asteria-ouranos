import 'mocha';
import { expect, assert } from 'chai';

// Class to test:
import { EndsWithFilter } from '../../../../../../src/com/asteria/ouranos/filter/impl/EndsWithFilter';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/utilities/EndsWithFilterTestUtils';

// Test:
describe('EndsWithFilter class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the EndsWithFilter full qualified class name', ()=> {
            const filter: EndsWithFilter = new EndsWithFilter();
            expect(filter.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });

    describe('#apply()', ()=> {
        it('should return false when property is null', ()=> {
            const filter: EndsWithFilter = new EndsWithFilter();
            expect(filter.apply(utils.OBJ, 'nullProp', utils.VALUE)).to.be.false;
        });

        it('should return false when property is undefined', ()=> {
            const filter: EndsWithFilter = new EndsWithFilter();
            expect(filter.apply(utils.OBJ, 'noopProp', utils.VALUE)).to.be.false;
        });
        
        it('should return false when property does not end with the specified value', ()=> {
            const filter: EndsWithFilter = new EndsWithFilter();
            expect(filter.apply(utils.OBJ, 'invalidProp', utils.VALUE)).to.be.false;
        });
        
        it('should return true when property ends with the specified value', ()=> {
            const filter: EndsWithFilter = new EndsWithFilter();
            expect(filter.apply(utils.OBJ, 'validProp', utils.VALUE)).to.be.true;
        });
    });
});