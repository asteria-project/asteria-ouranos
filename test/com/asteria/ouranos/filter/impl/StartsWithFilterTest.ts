import 'mocha';
import { expect } from 'chai';
import { FilterOperator } from 'asteria-gaia';

// Class to test:
import { StartsWithFilter } from '../../../../../../src/com/asteria/ouranos/filter/impl/StartsWithFilter';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/utilities/StartsWithFilterTestUtils';

// Test:
describe('StartsWithFilter class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the StartsWithFilter full qualified class name', ()=> {
            const filter: StartsWithFilter = new StartsWithFilter();
            expect(filter.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });

    describe('#operators', ()=> {
        it('should return an array that contains only a reference to FilterOperator.STARTS_WITH', ()=> {
            const filter: StartsWithFilter = new StartsWithFilter();
            const operators: Array<any> = filter.operators;
            expect(operators).to.have.lengthOf(1);
            expect(operators.indexOf(FilterOperator.STARTS_WITH)).to.not.equal(-1);
        });
    });

    describe('#apply()', ()=> {
        it('should return false when property is null', ()=> {
            const filter: StartsWithFilter = new StartsWithFilter();
            expect(filter.apply(utils.OBJ, 'nullProp', utils.VALUE)).to.be.false;
        });

        it('should return false when property is undefined', ()=> {
            const filter: StartsWithFilter = new StartsWithFilter();
            expect(filter.apply(utils.OBJ, 'noopProp', utils.VALUE)).to.be.false;
        });
        
        it('should return false when property does not end start the specified value', ()=> {
            const filter: StartsWithFilter = new StartsWithFilter();
            expect(filter.apply(utils.OBJ, 'invalidProp', utils.VALUE)).to.be.false;
        });
        
        it('should return true when property starts with the specified value', ()=> {
            const filter: StartsWithFilter = new StartsWithFilter();
            expect(filter.apply(utils.OBJ, 'validProp', utils.VALUE)).to.be.true;
        });
    });
});