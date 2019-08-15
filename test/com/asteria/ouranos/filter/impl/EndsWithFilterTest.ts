import 'mocha';
import { expect } from 'chai';
import { FilterOperator } from 'asteria-gaia';

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

    describe('#operators', ()=> {
        it('should return an array that contains only a reference to FilterOperator.ENDS_WITH', ()=> {
            const filter: EndsWithFilter = new EndsWithFilter();
            const operators: Array<any> = filter.operators;
            expect(operators).to.have.lengthOf(1);
            expect(operators.indexOf(FilterOperator.ENDS_WITH)).to.not.equal(-1);
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