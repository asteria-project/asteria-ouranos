"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
class OuranosProcessBuilder extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.cronos.util::OuranosProcessBuilder');
    }
    static getInstance() {
        return OuranosProcessBuilder._instance || (OuranosProcessBuilder._instance = new OuranosProcessBuilder());
    }
    build(processClass, config) {
        const process = new processClass();
        process.setConfig(config);
        return process;
    }
}
OuranosProcessBuilder._instance = null;
exports.OuranosProcessBuilder = OuranosProcessBuilder;
