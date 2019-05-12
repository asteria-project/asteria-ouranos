"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const OuranosSession_1 = require("./OuranosSession");
const OuranosProcessBuilder_1 = require("../util/builder/OuranosProcessBuilder");
const OuranosLogger_1 = require("../util/logging/OuranosLogger");
const OuranosErrorBuilder_1 = require("../util/builder/OuranosErrorBuilder");
class Ouranos extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super(Ouranos.CLASS_NAME);
    }
    static createSession(config) {
        this.checkConfig(config);
        return new OuranosSession_1.OuranosSession(config);
    }
    static buildProcess(processClass, config) {
        return OuranosProcessBuilder_1.OuranosProcessBuilder.getInstance().build(processClass, config);
    }
    static checkConfig(config) {
        let error = null;
        if (config === null || config === undefined) {
            error = OuranosErrorBuilder_1.OuranosErrorBuilder.getInstance().build(asteria_gaia_1.AsteriaErrorCode.MISSING_SESSION_CONFIG, Ouranos.CLASS_NAME, 'no configuration is specified');
            OuranosLogger_1.OuranosLogger.getLogger().fatal(error.toString());
        }
        else {
            const name = config.name;
            if (config === null || config === undefined) {
                error = OuranosErrorBuilder_1.OuranosErrorBuilder.getInstance().build(asteria_gaia_1.AsteriaErrorCode.MISSING_SESSION_NAME, Ouranos.CLASS_NAME, 'no session session name is specified');
                OuranosLogger_1.OuranosLogger.getLogger().fatal(error.toString());
            }
            else if (typeof name !== asteria_gaia_1.PrimitiveType.STRING || name === asteria_gaia_1.CommonChar.EMPTY) {
                error = OuranosErrorBuilder_1.OuranosErrorBuilder.getInstance().build(asteria_gaia_1.AsteriaErrorCode.INVALID_SESSION_NAME, Ouranos.CLASS_NAME, 'session config must define a valid session name');
                OuranosLogger_1.OuranosLogger.getLogger().fatal(error.toString());
            }
        }
        if (error) {
            throw asteria_gaia_1.ErrorUtil.errorToException(error);
        }
    }
}
Ouranos.CLASS_NAME = 'com.asteria.ouranos.core::Ouranos';
exports.Ouranos = Ouranos;
