import 'mocha';
import { expect } from 'chai';
import { FilterOperator, FilterOperatorNotation } from 'asteria-gaia';

// Class to test:
import { LowerThanFilter } from '../../../../../../src/com/asteria/ouranos/filter/impl/LowerThanFilter';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/utilities/LowerThanFilterTestUtils';

// Test:
describe('LowerThanFilter class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the LowerThanFilter full qualified class name', ()=> {
            const filter: LowerThanFilter = new LowerThanFilter();
            expect(filter.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });

    describe('#operators', ()=> {
        it('should return an array that contains reference to FilterOperator.LOWER_THAN and FilterOperatorNotation.LOWER_THAN', ()=> {
            const filter: LowerThanFilter = new LowerThanFilter();
            const operators: Array<any> = filter.operators;
            expect(operators).to.have.lengthOf(2);
            expect(operators.indexOf(FilterOperator.LOWER_THAN)).to.not.equal(-1);
            expect(operators.indexOf(FilterOperatorNotation.LOWER_THAN)).to.not.equal(-1);
        });
    });

    describe('#apply()', ()=> {
        it('should return false when property is null', ()=> {
            const filter: LowerThanFilter = new LowerThanFilter();
            expect(filter.apply(utils.OBJ, 'nullProp', utils.VALUE)).to.be.false;
        });

        it('should return false when property is undefined', ()=> {
            const filter: LowerThanFilter = new LowerThanFilter();
            expect(filter.apply(utils.OBJ, 'noopProp', utils.VALUE)).to.be.false;
        });
        
        it('should return false when property is lower than the specified value', ()=> {
            const filter: LowerThanFilter = new LowerThanFilter();
            expect(filter.apply(utils.OBJ, 'invalidProp', utils.VALUE)).to.be.false;
        });
        
        it('should return false when property is lower than the specified value', ()=> {
            const filter: LowerThanFilter = new LowerThanFilter();
            expect(filter.apply(utils.OBJ, 'validProp', utils.VALUE)).to.be.true;
        });
    });
});