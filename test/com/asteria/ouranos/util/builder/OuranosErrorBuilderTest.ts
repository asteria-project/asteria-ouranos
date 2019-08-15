import 'mocha';
import { expect } from 'chai';
import { AsteriaError } from 'asteria-gaia';

// Class to test:
import { OuranosErrorBuilder } from '../../../../../../src/com/asteria/ouranos/util/builder/OuranosErrorBuilder';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/utilities/OuranosErrorBuilderTestUtils';

// Test:
describe('Uuid class test', ()=> {

    describe('#getInstance()', ()=> {
        it('should return a OuranosErrorBuilder instance', ()=> {
            const obj: any = OuranosErrorBuilder.getInstance();
            expect(obj instanceof OuranosErrorBuilder).to.be.true;
        });

        it('should always return the same OuranosErrorBuilder instance', ()=> {
            const obj1: OuranosErrorBuilder = OuranosErrorBuilder.getInstance();
            const obj2: OuranosErrorBuilder = OuranosErrorBuilder.getInstance();
            expect(obj1).to.equal(obj2);
        });
    });

    describe('#getClassName()', ()=> {
        it('should return the OuranosErrorBuilder fully qualified class name', ()=> {
            const builder: OuranosErrorBuilder = OuranosErrorBuilder.getInstance();
            expect(builder.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#build()', ()=> {
        it('should create an AsteriaError object with the same code as the specified code parameter', () => {
            const builder: OuranosErrorBuilder = OuranosErrorBuilder.getInstance();
            const result: AsteriaError = builder.build(utils.CODE, utils.ERROR_CLASS_NAME, utils.MESSAGE, utils.STACK);
            expect(result.code).to.equal(utils.CODE);
        });

        it('should create an AsteriaError object with the same class name as the specified className parameter', () => {
            const builder: OuranosErrorBuilder = OuranosErrorBuilder.getInstance();
            const result: AsteriaError = builder.build(utils.CODE, utils.ERROR_CLASS_NAME, utils.MESSAGE, utils.STACK);
            expect(result.className).to.equal(utils.ERROR_CLASS_NAME);
        });

        it('should create an AsteriaError object with the same message as the specified message parameter', () => {
            const builder: OuranosErrorBuilder = OuranosErrorBuilder.getInstance();
            const result: AsteriaError = builder.build(utils.CODE, utils.ERROR_CLASS_NAME, utils.MESSAGE, utils.STACK);
            expect(result.message).to.equal(utils.MESSAGE);
        });

        it('should create an AsteriaError object with the same stack trace as the specified stack parameter', () => {
            const builder: OuranosErrorBuilder = OuranosErrorBuilder.getInstance();
            const result: AsteriaError = builder.build(utils.CODE, utils.ERROR_CLASS_NAME, utils.MESSAGE, utils.STACK);
            expect(result.stack).to.equal(utils.STACK);
        });
        
        it('should create an AsteriaError object with the stack trace equals to unbdefined', () => {
            const builder: OuranosErrorBuilder = OuranosErrorBuilder.getInstance();
            const result: AsteriaError = builder.build(utils.CODE, utils.ERROR_CLASS_NAME, utils.MESSAGE);
            expect(result.stack).to.equal(undefined);
        });
    });
});