"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
class EndsWithFilter extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.ouranos.filter.impl::EndsWithFilter');
        this.operators = [asteria_gaia_1.FilterOperator.ENDS_WITH];
    }
    apply(obj, property, value) {
        const prop = obj[property];
        return prop ? prop.endsWith(value) : false;
    }
}
exports.EndsWithFilter = EndsWithFilter;
