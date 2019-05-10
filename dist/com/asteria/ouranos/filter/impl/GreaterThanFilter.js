"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
class GreaterThanFilter extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.ouranos.filter.impl::GreaterThanFilter');
        this.operators = [asteria_gaia_1.FilterOperator.GREATER_THAN, asteria_gaia_1.FilterOperatorNotation.GREATER_THAN];
    }
    apply(obj, property, value) {
        const prop = obj[property];
        return prop ? prop > value : false;
    }
}
exports.GreaterThanFilter = GreaterThanFilter;
