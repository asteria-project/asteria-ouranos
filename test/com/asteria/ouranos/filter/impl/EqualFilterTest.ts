import 'mocha';
import { expect } from 'chai';
import { FilterOperator, FilterOperatorNotation } from 'asteria-gaia';

// Class to test:
import { EqualFilter } from '../../../../../../src/com/asteria/ouranos/filter/impl/EqualFilter';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/utilities/EqualFilterTestUtils';

// Test:
describe('EqualFilter class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the EqualFilter full qualified class name', ()=> {
            const filter: EqualFilter = new EqualFilter();
            expect(filter.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });

    describe('#operators', ()=> {
        it('should return an array that contains reference to FilterOperator.EQUAL and FilterOperatorNotation.EQUAL', ()=> {
            const filter: EqualFilter = new EqualFilter();
            const operators: Array<any> = filter.operators;
            expect(operators).to.have.lengthOf(2);
            expect(operators.indexOf(FilterOperator.EQUAL)).to.not.equal(-1);
            expect(operators.indexOf(FilterOperatorNotation.EQUAL)).to.not.equal(-1);
        });
    });

    describe('#apply()', ()=> {
        it('should return false when property is null', ()=> {
            const filter: EqualFilter = new EqualFilter();
            expect(filter.apply(utils.OBJ, 'nullProp', utils.VALUE)).to.be.false;
        });

        it('should return false when property is undefined', ()=> {
            const filter: EqualFilter = new EqualFilter();
            expect(filter.apply(utils.OBJ, 'noopProp', utils.VALUE)).to.be.false;
        });
        
        it('should return false when property does not strictly equal specified value', ()=> {
            const filter: EqualFilter = new EqualFilter();
            expect(filter.apply(utils.OBJ, 'invalidProp', utils.VALUE)).to.be.false;
        });
        
        it('should return false when property strictly equals specified value', ()=> {
            const filter: EqualFilter = new EqualFilter();
            expect(filter.apply(utils.OBJ, 'validProp', utils.VALUE)).to.be.true;
        });
    });
});