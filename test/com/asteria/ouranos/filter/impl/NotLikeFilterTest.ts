import 'mocha';
import { expect } from 'chai';
import { FilterOperator } from 'asteria-gaia';

// Class to test:
import { NotLikeFilter } from '../../../../../../src/com/asteria/ouranos/filter/impl/NotLikeFilter';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/utilities/NotLikeFilterTestUtils';

// Test:
describe('NotLikeFilter class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the NotLikeFilter full qualified class name', ()=> {
            const filter: NotLikeFilter = new NotLikeFilter();
            expect(filter.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });

    describe('#operators', ()=> {
        it('should return an array that contains a single reference to FilterOperator.NOT_LIKE', ()=> {
            const filter: NotLikeFilter = new NotLikeFilter();
            const operators: Array<any> = filter.operators;
            expect(operators).to.have.lengthOf(1);
            expect(operators.indexOf(FilterOperator.NOT_LIKE)).to.not.equal(-1);
        });
    });

    describe('#apply()', ()=> {
        it('should return false when property is null', ()=> {
            const filter: NotLikeFilter = new NotLikeFilter();
            expect(filter.apply(utils.OBJ, 'nullProp', utils.VALUE)).to.be.true;
        });

        it('should return false when property is undefined', ()=> {
            const filter: NotLikeFilter = new NotLikeFilter();
            expect(filter.apply(utils.OBJ, 'noopProp', utils.VALUE)).to.be.true;
        });
        
        it('should return false when property includes specified value', ()=> {
            const filter: NotLikeFilter = new NotLikeFilter();
            expect(filter.apply(utils.OBJ, 'invalidProp', utils.VALUE)).to.be.false;
        });
        
        it('should return false when property does not include specified value', ()=> {
            const filter: NotLikeFilter = new NotLikeFilter();
            expect(filter.apply(utils.OBJ, 'validProp', utils.VALUE)).to.be.true;
        });
    });
});