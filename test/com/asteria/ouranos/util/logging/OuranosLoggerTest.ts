import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { AsteriaLogger, AsteriaLogLevel } from 'asteria-gaia';

// Class to test:
import { OuranosLogger } from '../../../../../../src/com/asteria/ouranos/util/logging/OuranosLogger';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/utilities/OuranosLoggerTestUtils';

// Test:
describe('OuranosLogger class test', ()=> {

    describe('#getLogger()', ()=> {
        it('should return a OuranosLogger instance', ()=> {
            const obj: any = OuranosLogger.getLogger();
            expect(obj instanceof OuranosLogger).to.be.true;
        });

        it('should always return the same OuranosLogger instance', ()=> {
            const obj1: AsteriaLogger = OuranosLogger.getLogger();
            const obj2: AsteriaLogger = OuranosLogger.getLogger();
            expect(obj1).to.equal(obj2);
        });
    });

    describe('#getClassName()', ()=> {
        it('should return the OuranosLogger fully qualified class name', ()=> {
            const logger: OuranosLogger = (OuranosLogger.getLogger() as OuranosLogger);
            expect(logger.getClassName()).to.equal(utils.CLASS_NAME);
        });
    });
    
    describe('#getLogLevel()', ()=> {
        it('should return AsteriaLogLevel.INFO as default value', ()=> {
            const logger: AsteriaLogger = OuranosLogger.getLogger();
            expect(logger.getLogLevel()).to.equal(AsteriaLogLevel.INFO);
        });
    });
    
    describe('#setLogLevel()', ()=> {
        it('should change the value returned by the getLogLevel() method', ()=> {
            const logger: AsteriaLogger = OuranosLogger.getLogger();
            const defaultLevel: AsteriaLogLevel = logger.getLogLevel();
            logger.setLogLevel(AsteriaLogLevel.ERROR)
            expect(logger.getLogLevel()).to.equal(AsteriaLogLevel.ERROR);
            logger.setLogLevel(defaultLevel);
        });
    });

    describe('#debug()', ()=> {
        it('should invoke the log() method with the AsteriaLogLevel.DEBUG level and the specified message', ()=> {
            const logger: AsteriaLogger = OuranosLogger.getLogger();
            const spy: any = sinon.spy(logger, 'log');
            logger.debug(utils.MESSAGE);
            sinon.assert.calledWith(spy, AsteriaLogLevel.DEBUG, utils.MESSAGE);
            sinon.restore();
        });

        it('should not invoke the debug() method of the internal logger when log level is lower that AsteriaLogLevel.DEBUG', ()=> {
            const logger: AsteriaLogger = OuranosLogger.getLogger();
            const spy: any = sinon.spy(utils.getLogger(logger), 'debug');
            const defaultLevel: AsteriaLogLevel = logger.getLogLevel();
            logger.setLogLevel(AsteriaLogLevel.FATAL);
            logger.debug(utils.MESSAGE);
            sinon.assert.notCalled(spy);
            sinon.restore();
            logger.setLogLevel(defaultLevel);
        });
    });

    describe('#info()', ()=> {
        it('should invoke the log() method with the AsteriaLogLevel.INFO level and the specified message', ()=> {
            const logger: AsteriaLogger = OuranosLogger.getLogger();
            const spy: any = sinon.spy(logger, 'log');
            logger.info(utils.MESSAGE);
            sinon.assert.calledWith(spy, AsteriaLogLevel.INFO, utils.MESSAGE);
            sinon.restore();
        });

        it('should not invoke the info() method of the internal logger when log level is higher than AsteriaLogLevel.INFO', ()=> {
            const logger: AsteriaLogger = OuranosLogger.getLogger();
            const spy: any = sinon.spy(utils.getLogger(logger), 'info');
            const defaultLevel: AsteriaLogLevel = logger.getLogLevel();
            logger.setLogLevel(AsteriaLogLevel.FATAL);
            logger.info(utils.MESSAGE);
            sinon.assert.notCalled(spy);
            sinon.restore();
            logger.setLogLevel(defaultLevel);
        });
    });
    
    describe('#info()', ()=> {
        it('should invoke the log() method with the AsteriaLogLevel.WARN level and the specified message', ()=> {
            const logger: AsteriaLogger = OuranosLogger.getLogger();
            const spy: any = sinon.spy(logger, 'log');
            logger.warn(utils.MESSAGE);
            sinon.assert.calledWith(spy, AsteriaLogLevel.WARN, utils.MESSAGE);
            sinon.restore();
        });

        it('should not invoke the warn() method of the internal logger when log level is higher than AsteriaLogLevel.WARN', ()=> {
            const logger: AsteriaLogger = OuranosLogger.getLogger();
            const spy: any = sinon.spy(utils.getLogger(logger), 'warn');
            const defaultLevel: AsteriaLogLevel = logger.getLogLevel();
            logger.setLogLevel(AsteriaLogLevel.FATAL);
            logger.warn(utils.MESSAGE);
            sinon.assert.notCalled(spy);
            sinon.restore();
            logger.setLogLevel(defaultLevel);
        });
    });

    describe('#error()', ()=> {
        it('should invoke the log() method with the AsteriaLogLevel.ERROR level and the specified message', ()=> {
            const logger: AsteriaLogger = OuranosLogger.getLogger();
            const spy: any = sinon.spy(logger, 'log');
            logger.error(utils.MESSAGE);
            sinon.assert.calledWith(spy, AsteriaLogLevel.ERROR, utils.MESSAGE);
            sinon.restore();
        });

        it('should not invoke the error() method of the internal logger when log level is higher than AsteriaLogLevel.ERROR', ()=> {
            const logger: AsteriaLogger = OuranosLogger.getLogger();
            const spy: any = sinon.spy(utils.getLogger(logger), 'error');
            const defaultLevel: AsteriaLogLevel = logger.getLogLevel();
            logger.setLogLevel(AsteriaLogLevel.FATAL);
            logger.error(utils.MESSAGE);
            sinon.assert.notCalled(spy);
            sinon.restore();
            logger.setLogLevel(defaultLevel);
        });
    });
    
    describe('#fatal()', ()=> {
        it('should invoke the log() method with the AsteriaLogLevel.ERROR level and the specified message', ()=> {
            const logger: AsteriaLogger = OuranosLogger.getLogger();
            const spy: any = sinon.spy(logger, 'log');
            logger.fatal(utils.MESSAGE);
            sinon.assert.calledWith(spy, AsteriaLogLevel.FATAL, utils.MESSAGE);
            sinon.restore();
        });

        it('should alway invoke the fatal() method of the internal logger', ()=> {
            const logger: AsteriaLogger = OuranosLogger.getLogger();
            const spy: any = sinon.spy(utils.getLogger(logger), 'fatal');
            const defaultLevel: AsteriaLogLevel = logger.getLogLevel();
            logger.setLogLevel(AsteriaLogLevel.FATAL);
            logger.fatal(utils.MESSAGE);
            sinon.assert.calledWith(spy, utils.MESSAGE);
            sinon.restore();
            logger.setLogLevel(defaultLevel);
        });
    });
});