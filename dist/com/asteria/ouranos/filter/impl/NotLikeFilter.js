"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
class NotLikeFilter extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.ouranos.filter.impl::NotLikeFilter');
        this.operators = [asteria_gaia_1.FilterOperator.NOT_LIKE];
    }
    apply(obj, property, value) {
        const prop = obj[property];
        return prop ? prop.indexOf(value) === -1 : true;
    }
}
exports.NotLikeFilter = NotLikeFilter;
