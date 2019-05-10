"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const OuranosSession_1 = require("./OuranosSession");
const OuranosProcessBuilder_1 = require("../util/builder/OuranosProcessBuilder");
class Ouranos extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.ouranos.core::Ouranos');
    }
    static createSession(config) {
        return new OuranosSession_1.OuranosSession(config);
    }
    static buildProcess(processClass, config) {
        return OuranosProcessBuilder_1.OuranosProcessBuilder.getInstance().build(processClass, config);
    }
}
exports.Ouranos = Ouranos;
