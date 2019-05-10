import { AsteriaFilter, AbstractAsteriaObject, FilterOperator, FilterOperatorNotation } from 'asteria-gaia';
import { StartsWithFilter } from './impl/StartsWithFilter';
import { LikeFilter } from './impl/LikeFilter';
import { GreaterThanFilter } from './impl/GreaterThanFilter';
import { EqualFilter } from './impl/EqualFilter';
import { NotEqualFilter } from './impl/NotEqualFilter';
import { LowerThanFilter } from './impl/LowerThanFilter';
import { NotLikeFilter } from './impl/NotLikeFilter';
import { EndsWithFilter } from './impl/EndsWithFilter';

/**
 * Provides functionality to work with new <code>AsteriaFilter</code> instances through a singleton implementation.
 */
export class OuranosFilterManager extends AbstractAsteriaObject {

    /**
     * The static reference to this singleton.
     */
    private static _instance: OuranosFilterManager = null;

    /**
     * The collection of filters registered for this filter manager.
     */
    private _filterMap: Map<string, AsteriaFilter> = null;

    /**
     * Create a new <code>OuranosFilterManager</code> instance.
     */
    private constructor() {
        super('com.asteria.ouranos.filter::OuranosFilterManager');
        this.init();
    }

    /**
     * Returns the reference to this singleton.
     * 
     * @returns {OuranosFilterManager} the reference to this singleton.
     */
    public static getInstance(): OuranosFilterManager {
        return OuranosFilterManager._instance || (OuranosFilterManager._instance = new OuranosFilterManager());
    }

    /**
     * Initialize this object.
     */
    private init(): void {
        this._filterMap = new Map<string, AsteriaFilter>();
        this.register(new StartsWithFilter());
        this.register(new LikeFilter());
        this.register(new NotLikeFilter());
        this.register(new GreaterThanFilter());
        this.register(new EqualFilter());
        this.register(new NotEqualFilter());
        this.register(new LowerThanFilter());
        this.register(new EndsWithFilter());
    }

    /**
     * Register the specified filter into this manager.
     * 
     * @param {AsteriaFilter} filter the filter to register into this manager.
     */
    public register(filter: AsteriaFilter): void {
        filter.operators.forEach((operator: FilterOperator|FilterOperatorNotation|string)=> {
            this._filterMap.set(operator, filter);
        });
    }

    /**
     * Return the filter associated with the specified operator.
     * 
     * @param {string} operator the operation associated with the filter to get.
     * 
     * @param {AsteriaFilter} the filter associated with the specified operator.
     */
    public getFilter(operator: string): AsteriaFilter {
        return this._filterMap.get(operator);
    }
}
