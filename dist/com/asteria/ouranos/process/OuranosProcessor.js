"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const stream_1 = require("stream");
class OuranosProcessor extends asteria_gaia_1.AbstractAsteriaObject {
    constructor(context) {
        super('com.asteria.ouranos.process::OuranosProcessor');
        this.PROCESSES = new Array();
        this._streams = null;
        this._timestamp = 0;
        this.CONTEXT = context;
    }
    add(process) {
        const logger = this.CONTEXT.getLogger();
        this.PROCESSES.push(process);
        logger.info(`stream process added to session processor: ${process.getClassName()}`);
        return this;
    }
    remove(process) {
        this.PROCESSES.splice(this.getProcessIndex(process), 1);
        return this;
    }
    run() {
        this._timestamp = Date.now();
        const logger = this.CONTEXT.getLogger();
        const length = this.PROCESSES.length;
        logger.info('asteria processing start');
        logger.info(`streaming ${length} process${length !== 1 ? 'es' : asteria_gaia_1.CommonChar.EMPTY}`);
        let i = 0;
        this._streams = new Array(length);
        const streams = new Array();
        let stream = null;
        for (; i <= length - 1; ++i) {
            const streamProcess = this.PROCESSES[i];
            stream = streamProcess.create(this.CONTEXT);
            streams.push(stream);
        }
        streams.push(this.onprocessComplete.bind(this));
        stream_1.pipeline.apply(this, streams);
        return stream;
    }
    onprocessComplete(err) {
        if (!err) {
            const completeTs = Date.now() - this._timestamp;
            this.CONTEXT.getLogger().info(`asteria processing completed in ${completeTs} ms`);
        }
        else {
            this.CONTEXT.getLogger().fatal(`asteria processingfailed: ${err.toString()}`);
        }
    }
    getProcessIndex(process) {
        return this.PROCESSES.indexOf(process);
    }
}
exports.OuranosProcessor = OuranosProcessor;
