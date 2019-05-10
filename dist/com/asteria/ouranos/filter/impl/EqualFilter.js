"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
class EqualFilter extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.ouranos.filter.impl::EqualFilter');
        this.operators = [asteria_gaia_1.FilterOperator.EQUAL, asteria_gaia_1.FilterOperatorNotation.EQUAL];
    }
    apply(obj, property, value) {
        const prop = obj[property];
        return prop ? (prop === value) : false;
    }
}
exports.EqualFilter = EqualFilter;
