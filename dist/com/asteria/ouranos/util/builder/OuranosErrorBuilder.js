"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
class OuranosErrorBuilder extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.ouranos.util.builder::OuranosErrorBuilder');
    }
    static getInstance() {
        return OuranosErrorBuilder._instance || (OuranosErrorBuilder._instance = new OuranosErrorBuilder());
    }
    build(code, className, message, stack) {
        const error = new asteria_gaia_1.AsteriaError(code, className, message, stack);
        return error;
    }
}
OuranosErrorBuilder._instance = null;
exports.OuranosErrorBuilder = OuranosErrorBuilder;
