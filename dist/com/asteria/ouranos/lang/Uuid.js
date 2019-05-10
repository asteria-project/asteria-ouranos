"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const asteria_gaia_1 = require("asteria-gaia");
class Uuid extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.ouranos.lang::Uuid');
    }
    static v4() {
        return uuid.v4();
    }
}
exports.Uuid = Uuid;
