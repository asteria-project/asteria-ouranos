import 'mocha';
import { expect } from 'chai';
import { FilterOperator, FilterOperatorNotation } from 'asteria-gaia';

// Class to test:
import { NotEqualFilter } from '../../../../../../src/com/asteria/ouranos/filter/impl/NotEqualFilter';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/utilities/NotEqualFilterTestUtils';

// Test:
describe('NotEqualFilter class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the NotEqualFilter full qualified class name', ()=> {
            const filter: NotEqualFilter = new NotEqualFilter();
            expect(filter.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });

    describe('#operators', ()=> {
        it('should return an array that contains reference to FilterOperator.NOT_EQUAL and FilterOperatorNotation.NOT_EQUAL', ()=> {
            const filter: NotEqualFilter = new NotEqualFilter();
            const operators: Array<any> = filter.operators;
            expect(operators).to.have.lengthOf(2);
            expect(operators.indexOf(FilterOperator.NOT_EQUAL)).to.not.equal(-1);
            expect(operators.indexOf(FilterOperatorNotation.NOT_EQUAL)).to.not.equal(-1);
        });
    });

    describe('#apply()', ()=> {
        it('should return true when property is null', ()=> {
            const filter: NotEqualFilter = new NotEqualFilter();
            expect(filter.apply(utils.OBJ, 'nullProp', utils.VALUE)).to.be.true;
        });

        it('should return true when property is undefined', ()=> {
            const filter: NotEqualFilter = new NotEqualFilter();
            expect(filter.apply(utils.OBJ, 'noopProp', utils.VALUE)).to.be.true;
        });
        
        it('should return false when property strictly equals specified value', ()=> {
            const filter: NotEqualFilter = new NotEqualFilter();
            expect(filter.apply(utils.OBJ, 'invalidProp', utils.VALUE)).to.be.false;
        });
        
        it('should return false when property does not strictly equal specified value', ()=> {
            const filter: NotEqualFilter = new NotEqualFilter();
            expect(filter.apply(utils.OBJ, 'validProp', utils.VALUE)).to.be.true;
        });
    });
});