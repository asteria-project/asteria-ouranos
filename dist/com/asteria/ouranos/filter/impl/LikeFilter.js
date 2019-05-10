"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
class LikeFilter extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.ouranos.filter.impl::LikeFilter');
        this.operators = [asteria_gaia_1.FilterOperator.LIKE];
    }
    apply(obj, property, value) {
        const prop = obj[property];
        return prop ? prop.indexOf(value) !== -1 : false;
    }
}
exports.LikeFilter = LikeFilter;
