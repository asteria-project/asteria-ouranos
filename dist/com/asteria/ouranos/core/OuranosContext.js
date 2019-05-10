"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const OuranosProcessor_1 = require("../process/OuranosProcessor");
const OuranosLogger_1 = require("../util/logging/OuranosLogger");
class OuranosContext extends asteria_gaia_1.AbstractAsteriaObject {
    constructor(name, uuid) {
        super('com.asteria.ouranos.core::OuranosContext');
        this.GUID = uuid;
        this.NAME = name;
        this.PROCESSOR = new OuranosProcessor_1.OuranosProcessor(this);
    }
    getLogger() {
        return OuranosLogger_1.OuranosLogger.getLogger();
    }
    getName() {
        return this.NAME;
    }
    getId() {
        return this.GUID;
    }
    getProcessor() {
        return this.PROCESSOR;
    }
}
exports.OuranosContext = OuranosContext;
