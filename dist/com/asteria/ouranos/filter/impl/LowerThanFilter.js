"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
class LowerThanFilter extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.ouranos.filter.impl::LowerThanFilter');
        this.operators = [asteria_gaia_1.FilterOperator.LOWER_THAN, asteria_gaia_1.FilterOperatorNotation.LOWER_THAN];
    }
    apply(obj, property, value) {
        const prop = obj[property];
        return prop ? prop < value : false;
    }
}
exports.LowerThanFilter = LowerThanFilter;
