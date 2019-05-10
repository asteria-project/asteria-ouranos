"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
class StartsWithFilter extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.ouranos.filter.impl::StartsWithFilter');
        this.operators = [asteria_gaia_1.FilterOperator.STARTS_WITH];
    }
    apply(obj, property, value) {
        const prop = obj[property];
        return prop ? prop.startsWith(value) : false;
    }
}
exports.StartsWithFilter = StartsWithFilter;
