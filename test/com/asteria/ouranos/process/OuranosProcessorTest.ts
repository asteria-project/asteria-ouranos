import 'mocha';
import { expect, assert } from 'chai';
import { AsteriaException, StreamProcess } from 'asteria-gaia';

// Class to test:
import { OuranosProcessor } from '../../../../../src/com/asteria/ouranos/process/OuranosProcessor';

// Utilities:
import * as utils from '../../../../../utils/test-utils/utilities/OuranosProcessorTestUtils';

// Test:
describe('OuranosProcessor class test', ()=> {

    describe('#getClassName()', ()=> {
        it('should return the OuranosProcessor fully qualified class name', ()=> {
            const processor: OuranosProcessor = new OuranosProcessor(utils.CONTEXT);
            expect(processor.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#add()', ()=> {
        it('should add processes to the processor', ()=> {
            const processor: OuranosProcessor = new OuranosProcessor(utils.CONTEXT);
            const process: StreamProcess = utils.buildStreamProcess('test');
            processor.add(process);
            expect(utils.getStreamProcessList(processor).indexOf(process)).to.not.equal(-1);
        });
    });

    describe('#remove()', ()=> {
        it('should remove processes from the processor', ()=> {
            const processor: OuranosProcessor = new OuranosProcessor(utils.CONTEXT);
            const process: StreamProcess = utils.buildStreamProcess('test');
            processor.add(process);
            expect(utils.getStreamProcessList(processor).indexOf(process)).to.not.equal(-1);
            processor.remove(process);
            expect(utils.getStreamProcessList(processor).indexOf(process)).to.equal(-1);
        });
    });

    describe('#size()', ()=> {
        it('should return 0 whether the processor has no registered processes', ()=> {
            const processor: OuranosProcessor = new OuranosProcessor(utils.CONTEXT);
            expect(processor.size()).to.equal(0);
        });

        it('should return the number of registered processes', ()=> {
            const seed: number = Math.floor(Math.random() * (11)) + 1;
            const processor: OuranosProcessor = new OuranosProcessor(utils.CONTEXT);
            let len: number = seed;
            while (len--) {
                processor.add(utils.buildStreamProcess('test' + seed));
            }
            expect(processor.size()).to.equal(seed);
        });
    });

    describe('#run()', ()=> {
        it('should return thrown an exception whether the processor has no registered processes', ()=> {
            const processor: OuranosProcessor = new OuranosProcessor(utils.CONTEXT);
            const shouldThrowError: Function = () => {
                processor.run();
            };
            assert.throws(shouldThrowError, AsteriaException, 'No streaming process is defined!');
        });

        it('should execute all registered streams', (done)=> {
            const seed: number = Math.floor(Math.random() * (11)) + 1;
            const processor: OuranosProcessor = new OuranosProcessor(utils.CONTEXT);
            processor.add(utils.buildReadableStreamProcess());
            let len: number = seed;
            while (len--) {
                processor.add(utils.buildStreamProcess('test' + seed));
            }
            const stream: any = processor.run();
            stream.on('finish', ()=> {
                done();
            });
        });
    });
});