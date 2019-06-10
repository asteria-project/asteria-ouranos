"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asteria_gaia_1 = require("asteria-gaia");
const stream_1 = require("stream");
const LogIdUtils_1 = require("../util/logging/LogIdUtils");
class OuranosProcessor extends asteria_gaia_1.AbstractAsteriaObject {
    constructor(context) {
        super('com.asteria.ouranos.process::OuranosProcessor');
        this.PROCESSES = new Array();
        this._timestamp = 0;
        this.CONTEXT = context;
        this.LOG_ID = LogIdUtils_1.LogIdUtils.getLogId(this.CONTEXT);
    }
    add(process) {
        const logger = this.CONTEXT.getLogger();
        this.PROCESSES.push(process);
        logger.info(`${this.LOG_ID} stream process added to session processor: ${process.getClassName()}`);
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
        logger.info(`${this.LOG_ID} asteria processing start`);
        if (length === 0) {
            logger.fatal(`${this.LOG_ID} asteria processing error: no streaming process is defined`);
            throw new asteria_gaia_1.AsteriaException(asteria_gaia_1.AsteriaErrorCode.INVALID_PARAMETER, 'No streaming process is defined!');
        }
        logger.info(`${this.LOG_ID} streaming ${length} process${length !== 1 ? 'es' : asteria_gaia_1.CommonChar.EMPTY}`);
        let i = 0;
        const streams = new Array();
        let stream = null;
        if (length > 1) {
            for (; i <= length - 1; ++i) {
                const streamProcess = this.PROCESSES[i];
                stream = streamProcess.create(this.CONTEXT);
                streams.push(stream);
            }
            streams.push(this.onprocessComplete.bind(this));
            stream_1.pipeline.apply(this, streams);
        }
        else {
            stream = this.PROCESSES[i].create(this.CONTEXT);
            stream.on('close', this.onprocessComplete.bind(this));
        }
        return stream;
    }
    onprocessComplete(err) {
        if (!err) {
            const completeTs = Date.now() - this._timestamp;
            this.CONTEXT.getLogger().info(`${this.LOG_ID} asteria processing completed in ${completeTs} ms`);
        }
        else {
            this.CONTEXT.getLogger().fatal(`${this.LOG_ID} asteria processing failed: ${err.toString()}`);
        }
    }
    getProcessIndex(process) {
        return this.PROCESSES.indexOf(process);
    }
}
exports.OuranosProcessor = OuranosProcessor;
