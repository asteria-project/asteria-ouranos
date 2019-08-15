import 'mocha';
import { expect } from 'chai';
import { FilterOperator, FilterOperatorNotation } from 'asteria-gaia';

// Class to test:
import { GreaterThanFilter } from '../../../../../../src/com/asteria/ouranos/filter/impl/GreaterThanFilter';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/utilities/GreaterThanFilterTestUtils';

// Test:
describe('GreaterThanFilter class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the GreaterThanFilter full qualified class name', ()=> {
            const filter: GreaterThanFilter = new GreaterThanFilter();
            expect(filter.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });

    describe('#operators', ()=> {
        it('should return an array that contains reference to FilterOperator.GREATER_THAN and FilterOperatorNotation.GREATER_THAN', ()=> {
            const filter: GreaterThanFilter = new GreaterThanFilter();
            const operators: Array<any> = filter.operators;
            expect(operators).to.have.lengthOf(2);
            expect(operators.indexOf(FilterOperator.GREATER_THAN)).to.not.equal(-1);
            expect(operators.indexOf(FilterOperatorNotation.GREATER_THAN)).to.not.equal(-1);
        });
    });

    describe('#apply()', ()=> {
        it('should return false when property is null', ()=> {
            const filter: GreaterThanFilter = new GreaterThanFilter();
            expect(filter.apply(utils.OBJ, 'nullProp', utils.VALUE)).to.be.false;
        });

        it('should return false when property is undefined', ()=> {
            const filter: GreaterThanFilter = new GreaterThanFilter();
            expect(filter.apply(utils.OBJ, 'noopProp', utils.VALUE)).to.be.false;
        });
        
        it('should return false when property is lower than the specified value', ()=> {
            const filter: GreaterThanFilter = new GreaterThanFilter();
            expect(filter.apply(utils.OBJ, 'invalidProp', utils.VALUE)).to.be.false;
        });
        
        it('should return false when property is greater than the specified value', ()=> {
            const filter: GreaterThanFilter = new GreaterThanFilter();
            expect(filter.apply(utils.OBJ, 'validProp', utils.VALUE)).to.be.true;
        });
    });
});