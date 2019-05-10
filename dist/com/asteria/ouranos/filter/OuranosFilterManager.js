"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const StartsWithFilter_1 = require("./impl/StartsWithFilter");
const LikeFilter_1 = require("./impl/LikeFilter");
const GreaterThanFilter_1 = require("./impl/GreaterThanFilter");
const EqualFilter_1 = require("./impl/EqualFilter");
const NotEqualFilter_1 = require("./impl/NotEqualFilter");
const LowerThanFilter_1 = require("./impl/LowerThanFilter");
const NotLikeFilter_1 = require("./impl/NotLikeFilter");
const EndsWithFilter_1 = require("./impl/EndsWithFilter");
class OuranosFilterManager extends asteria_gaia_1.AbstractAsteriaObject {
    constructor() {
        super('com.asteria.ouranos.filter::OuranosFilterManager');
        this._filterMap = null;
        this.init();
    }
    static getInstance() {
        return OuranosFilterManager._instance || (OuranosFilterManager._instance = new OuranosFilterManager());
    }
    init() {
        this._filterMap = new Map();
        this.register(new StartsWithFilter_1.StartsWithFilter());
        this.register(new LikeFilter_1.LikeFilter());
        this.register(new NotLikeFilter_1.NotLikeFilter());
        this.register(new GreaterThanFilter_1.GreaterThanFilter());
        this.register(new EqualFilter_1.EqualFilter());
        this.register(new NotEqualFilter_1.NotEqualFilter());
        this.register(new LowerThanFilter_1.LowerThanFilter());
        this.register(new EndsWithFilter_1.EndsWithFilter());
    }
    register(filter) {
        filter.operators.forEach((operator) => {
            this._filterMap.set(operator, filter);
        });
    }
    getFilter(operator) {
        return this._filterMap.get(operator);
    }
}
OuranosFilterManager._instance = null;
exports.OuranosFilterManager = OuranosFilterManager;
