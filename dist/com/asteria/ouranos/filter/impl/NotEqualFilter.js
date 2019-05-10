"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
class NotEqualFilter extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.ouranos.filter.impl::NotEqualFilter');
        this.operators = [asteria_gaia_1.FilterOperator.NOT_EQUAL, asteria_gaia_1.FilterOperatorNotation.NOT_EQUAL];
    }
    apply(obj, property, value) {
        const prop = obj[property];
        return prop ? (prop !== value) : true;
    }
}
exports.NotEqualFilter = NotEqualFilter;
