import 'mocha';
import { expect } from 'chai';
import { FilterOperator } from 'asteria-gaia';

// Class to test:
import { LikeFilter } from '../../../../../../src/com/asteria/ouranos/filter/impl/LikeFilter';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/utilities/LikeFilterTestUtils';

// Test:
describe('LikeFilter class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the LikeFilter full qualified class name', ()=> {
            const filter: LikeFilter = new LikeFilter();
            expect(filter.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });

    describe('#operators', ()=> {
        it('should return an array that contains a single reference to FilterOperator.LIKE', ()=> {
            const filter: LikeFilter = new LikeFilter();
            const operators: Array<any> = filter.operators;
            expect(operators).to.have.lengthOf(1);
            expect(operators.indexOf(FilterOperator.LIKE)).to.not.equal(-1);
        });
    });

    describe('#apply()', ()=> {
        it('should return false when property is null', ()=> {
            const filter: LikeFilter = new LikeFilter();
            expect(filter.apply(utils.OBJ, 'nullProp', utils.VALUE)).to.be.false;
        });

        it('should return false when property is undefined', ()=> {
            const filter: LikeFilter = new LikeFilter();
            expect(filter.apply(utils.OBJ, 'noopProp', utils.VALUE)).to.be.false;
        });
        
        it('should return false when property does not include specified value', ()=> {
            const filter: LikeFilter = new LikeFilter();
            expect(filter.apply(utils.OBJ, 'invalidProp', utils.VALUE)).to.be.false;
        });
        
        it('should return false when property includes specified value', ()=> {
            const filter: LikeFilter = new LikeFilter();
            expect(filter.apply(utils.OBJ, 'validProp', utils.VALUE)).to.be.true;
        });
    });
});