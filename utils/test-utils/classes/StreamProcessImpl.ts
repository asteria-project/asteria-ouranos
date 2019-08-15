import { StreamProcess, StreamProcessType, AsteriaStream, AsteriaContext } from 'asteria-gaia';

/**
 * A basic stream process that is used for unit testing.
 */
export class StreamProcessImpl implements StreamProcess {
    
    /**
     * The config object for this process.
     */
    private _config: any = null;

    /**
     * Create a new <code>FileLoaderProcess</code> instance.
     */
    constructor() {}

    /**
     * @implements
     */
    public getClassName(): string {
        return 'StreamProcessImpl';
    }

    /**
     * @implements
     */
    public getConfig(): any {
        return this._config;
    }

    /**
     * @implements
     */
    public setConfig(config: any): void {
        this._config = config;
    }

    /**
     * @implements
     */
    public getType(): StreamProcessType {
        return StreamProcessType.READABLE;
    }

    /**
     * @implements
     */
    public create(context: AsteriaContext): AsteriaStream {
        return null;
    }
}
