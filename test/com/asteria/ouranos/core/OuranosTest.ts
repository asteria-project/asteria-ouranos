import 'mocha';
import { expect, assert } from 'chai';
import { OuranosSession } from '../../../../../src/com/asteria/ouranos/core/OuranosSession';
import { StreamProcess,  AsteriaException, AsteriaSession } from 'asteria-gaia';

// Class to test:
import { Ouranos } from '../../../../../src/com/asteria/ouranos/core/Ouranos';

// Utilities:
import * as utils from '../../../../../utils/test-utils/utilities/OuranosTestUtils';
import { StreamProcessImpl } from '../../../../../utils/test-utils/classes/StreamProcessImpl';

// Test:
describe('Ouranos class test', ()=> {

  describe('#getClassName()', ()=> {
    it('should return the Ouranos full qualified class name', ()=> {
        const ouranos: Ouranos = new Ouranos();
        expect(ouranos.getClassName()).to.equal(utils.CLASS_NAME);
    });
  });
  
  describe('#buildProcess()', ()=> {
    it('should a new StreamProcess instance of the type of the specified class', ()=> {
        const process: StreamProcess = Ouranos.buildProcess(StreamProcessImpl);
        expect(process instanceof StreamProcessImpl).to.be.true;
    });

    it('should a new StreamProcess instance without config', ()=> {
        const process: StreamProcess = Ouranos.buildProcess(StreamProcessImpl);
        expect(process.getConfig()).to.be.undefined;
    });

    it('should a new StreamProcess instance with the same config as passed as method parameter', ()=> {
        const process: StreamProcess = Ouranos.buildProcess(StreamProcessImpl, utils.STREAM_PROCESS_CONFIG);
        expect(process.getConfig()).to.equal(utils.STREAM_PROCESS_CONFIG);
    });
  });
  
  describe('#createSession()', ()=> {
    it('should throw an exception whether the config parameter is null', ()=> {
        const shouldThrowError: Function = () => {
            Ouranos.createSession(null);
        };
        assert.throws(shouldThrowError, AsteriaException, 'no configuration is specified');
    });

    it('should throw an exception whether the session name is null', ()=> {
        const shouldThrowError: Function = () => {
            Ouranos.createSession({ name: null });
        };
        assert.throws(shouldThrowError, AsteriaException, 'no session session name is specified');
    });
    
    it('should throw an exception whether the session name is en empty string', ()=> {
        const shouldThrowError: Function = () => {
            Ouranos.createSession({ name: '' });
        };
        assert.throws(shouldThrowError, AsteriaException, 'session config must define a valid session name');
    });
    
    it('should throw an exception whether the session name is not a string', ()=> {
        const shouldThrowError: Function = () => {
            Ouranos.createSession({ name: 0 } as any);
        };
        assert.throws(shouldThrowError, AsteriaException, 'session config must define a valid session name');
    });

    it('should create a new OuranosSession instance', ()=> {
        const session: AsteriaSession = Ouranos.createSession(utils.SESSION_CONFIG);
        expect(session instanceof OuranosSession).to.be.true;
    });
    
    it('should create a new session with the name equals to the config name', ()=> {
        const session: AsteriaSession = Ouranos.createSession(utils.SESSION_CONFIG);
        expect(session.getContext().getName()).to.equal(utils.SESSION_CONFIG.name);
    });
  });
});