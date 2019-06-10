import { AbstractAsteriaObject, StreamProcessor, StreamProcess, AsteriaLogger, AsteriaStream, CommonChar, AsteriaException, AsteriaErrorCode } from 'asteria-gaia';
import { OuranosContext } from '../core/OuranosContext';
import { pipeline } from 'stream';
import { LogIdUtils } from '../util/logging/LogIdUtils';

/**
 * The <code>OuranosProcessor</code> class is the default implementation fo the <code>StreamProcessor</code> interface.
 */
export class OuranosProcessor extends AbstractAsteriaObject implements StreamProcessor {

    /**
     * The <code>OuranosContext</code> reference associated with this processor.
     */
    private readonly CONTEXT: OuranosContext;

    /**
     * The referece of the Ouranos context log id associated with this processor.
     */
    private readonly LOG_ID: string;

    /**
     * The list of <code>StreamProcess</code> objects registered whithin this processor.
     */
    private readonly PROCESSES: Array<StreamProcess> = new Array<StreamProcess>();

    /**
     * Stores the global data processing start time.
     */
    private _timestamp: number = 0;

    /**
     * Create a new <code>OuranosProcessor</code> instance.
     * 
     * @param {OuranosContext} context the context associated with this processor.
     */
    constructor(context: OuranosContext) {
        super('com.asteria.ouranos.process::OuranosProcessor');
        this.CONTEXT = context;
        this.LOG_ID = LogIdUtils.getLogId(this.CONTEXT);
    }

    /**
     * @inheritdoc
     */
    public add(process: StreamProcess): StreamProcessor {
        const logger: AsteriaLogger = this.CONTEXT.getLogger();
        this.PROCESSES.push(process);
        logger.info(`${this.LOG_ID} stream process added to session processor: ${process.getClassName() }`);
        return this;
    }

    /**
     * @inheritdoc
     */
    public remove(process: StreamProcess): StreamProcessor {
        this.PROCESSES.splice(this.getProcessIndex(process), 1);
        return this;
    }

    /**
     * @inheritdoc
     */
    public run(): AsteriaStream {
        this._timestamp = Date.now();
        const logger: AsteriaLogger = this.CONTEXT.getLogger();
        const length: number = this.PROCESSES.length;
        logger.info(`${this.LOG_ID} asteria processing start`);
        if (length === 0) {
            logger.fatal(`${this.LOG_ID} asteria processing error: no streaming process is defined`);
            throw new AsteriaException(AsteriaErrorCode.PROCESS_FAILURE, 'No streaming process is defined!');
        }
        logger.info(`${this.LOG_ID} streaming ${length} process${ length !== 1 ? 'es' : CommonChar.EMPTY}`);
        let i: number = 0;
        const streams: Array<any> = new Array<any>();
        let stream: any = null;
        if (length > 1) {
            for (; i <= length - 1; ++i) {
                const streamProcess: StreamProcess = this.PROCESSES[i];
                stream = streamProcess.create(this.CONTEXT);
                streams.push(stream);
            }
            streams.push(this.onprocessComplete.bind(this));
            (pipeline as Function).apply(this, streams);
        } else {
            stream = this.PROCESSES[i].create(this.CONTEXT);
            stream.on('close', this.onprocessComplete.bind(this));
        }
        return stream;
    }

    /**
     * Invoked when all the stream processes are over.
     * 
     * @param {any} err an object set only whether an error occured during the execution of the stream processes.
     */
    private onprocessComplete(err: any): void {
        if (!err) {
            const completeTs: number = Date.now() - this._timestamp;
            this.CONTEXT.getLogger().info(`${this.LOG_ID} asteria processing completed in ${completeTs} ms`);
        } else {
            this.CONTEXT.getLogger().fatal(`${this.LOG_ID} asteria processing failed: ${err.toString()}`);
        }
    }
    
    /**
     * Returns the index of the specified process.
     * 
     * @param {StreamProcess} process the process for which to get the index.
     * 
     * @returns {number} the index of the specified process.
     */
    private getProcessIndex(process: StreamProcess): number {
        return this.PROCESSES.indexOf(process);
    }
}
