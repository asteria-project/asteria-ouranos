"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const OuranosContext_1 = require("./OuranosContext");
const Uuid_1 = require("../lang/Uuid");
class OuranosSession extends asteria_gaia_1.AbstractAsteriaObject {
    constructor(config) {
        super('com.asteria.ouranos.core::OuranosSession');
        const name = config.name;
        const id = Uuid_1.Uuid.v4();
        this.CONTEXT = new OuranosContext_1.OuranosContext(name, id);
        this.CONTEXT.getLogger().info(`asteria session "${name}" created with the ID "${id}"`);
    }
    getContext() {
        return this.CONTEXT;
    }
}
exports.OuranosSession = OuranosSession;
