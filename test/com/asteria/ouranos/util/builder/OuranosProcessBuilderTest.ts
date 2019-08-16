import 'mocha';
import { expect } from 'chai';
import { StreamProcessBuilder, StreamProcess, StreamProcessConfig } from 'asteria-gaia';

// Class to test:
import { OuranosProcessBuilder } from '../../../../../../src/com/asteria/ouranos/util/builder/OuranosProcessBuilder';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/utilities/OuranosProcessBuilderTestUtils';
import { StreamProcessImpl } from '../../../../../../utils/test-utils/classes/StreamProcessImpl';

// Test:
describe('OuranosProcessBuilder class test', ()=> {

    describe('#getInstance()', ()=> {
        it('should return a OuranosProcessBuilder instance', ()=> {
            const obj: any = OuranosProcessBuilder.getInstance();
            expect(obj instanceof OuranosProcessBuilder).to.be.true;
        });

        it('should always return the same OuranosProcessBuilder instance', ()=> {
            const obj1: StreamProcessBuilder = OuranosProcessBuilder.getInstance();
            const obj2: StreamProcessBuilder = OuranosProcessBuilder.getInstance();
            expect(obj1).to.equal(obj2);
        });
    });

    describe('#getClassName()', ()=> {
        it('should return the OuranosProcessBuilder fully qualified class name', ()=> {
            const builder: StreamProcessBuilder = OuranosProcessBuilder.getInstance();
            expect(builder.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#build()', ()=> {
        
        it('should create a StreamProcess object of the type of the specified parameter', () => {
            const builder: StreamProcessBuilder = OuranosProcessBuilder.getInstance();
            const result: StreamProcess = builder.build(StreamProcessImpl, utils.getStreamProcessConfig());
            expect(result instanceof StreamProcessImpl).to.be.true;
        });
        
        it('should create a StreamProcess object initialized with the specified config parameter', () => {
            const builder: StreamProcessBuilder = OuranosProcessBuilder.getInstance();
            const config: StreamProcessConfig = utils.getStreamProcessConfig();
            const result: StreamProcess = builder.build(StreamProcessImpl, config);
            expect(result.getConfig()).to.equal(config);
        });
        
        it('should create a StreamProcess object with config equals to undefined', () => {
            const builder: StreamProcessBuilder = OuranosProcessBuilder.getInstance();
            const result: StreamProcess = builder.build(StreamProcessImpl);
            expect(result.getConfig()).to.equal(undefined);
        });
    });
});