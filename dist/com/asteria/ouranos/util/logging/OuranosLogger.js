"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const logger = require("ts-log-debug");
class OuranosLogger extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.ouranos.util.logging::OuranosLogger');
        this._logLevel = asteria_gaia_1.AsteriaLogLevel.INFO;
        this.LOGGER = new logger.Logger('Asteria');
        this.LOGGER.appenders.set('stdout', {
            type: 'stdout',
            level: [
                asteria_gaia_1.AsteriaLogLevel.DEBUG, asteria_gaia_1.AsteriaLogLevel.INFO,
                asteria_gaia_1.AsteriaLogLevel.WARN, asteria_gaia_1.AsteriaLogLevel.ERROR,
                asteria_gaia_1.AsteriaLogLevel.FATAL,
            ]
        });
    }
    static getLogger() {
        return OuranosLogger._instance || (OuranosLogger._instance = new OuranosLogger());
    }
    getLogLevel() {
        return this._logLevel;
    }
    setLogLevel(level) {
        this._logLevel = level;
    }
    log(level, message) {
        if (level >= this._logLevel) {
            switch (level) {
                case asteria_gaia_1.AsteriaLogLevel.DEBUG:
                    this.LOGGER.debug(message);
                    break;
                case asteria_gaia_1.AsteriaLogLevel.INFO:
                    this.LOGGER.info(message);
                    break;
                case asteria_gaia_1.AsteriaLogLevel.WARN:
                    this.LOGGER.warn(message);
                    break;
                case asteria_gaia_1.AsteriaLogLevel.ERROR:
                    this.LOGGER.error(message);
                    break;
                case asteria_gaia_1.AsteriaLogLevel.FATAL:
                    this.LOGGER.fatal(message);
                    break;
            }
        }
    }
    info(message) {
        this.log(asteria_gaia_1.AsteriaLogLevel.INFO, message);
    }
    debug(message) {
        this.log(asteria_gaia_1.AsteriaLogLevel.DEBUG, message);
    }
    warn(message) {
        this.log(asteria_gaia_1.AsteriaLogLevel.WARN, message);
    }
    error(message) {
        this.log(asteria_gaia_1.AsteriaLogLevel.ERROR, message);
    }
    fatal(message) {
        this.log(asteria_gaia_1.AsteriaLogLevel.FATAL, message);
    }
}
OuranosLogger._instance = null;
exports.OuranosLogger = OuranosLogger;
