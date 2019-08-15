import { Transform, TransformCallback } from 'stream';
import { AsteriaStream, StreamProcessConfig, AsteriaContext } from 'asteria-gaia';

/**
 * The <code>TestStream</code> class is the stream implemetation used in test suites.
 */
export class TestStream extends Transform implements AsteriaStream {

    /**
     * Create a new <code>AsteriaObject</code> instance.
     */
    constructor() {
        super(null);
    }

    /**
     * @inheritdoc
     */
    public getClassName(): string {
        return 'TestStream';
    }

    /**
     * @inheritdoc
     */
    public init(config: StreamProcessConfig, context: AsteriaContext): void {}
    
    /**
     * @internal
     */
    public _transform(chunk: any, encoding: string, callback: TransformCallback): void {
        callback(null, chunk.toString());
    }
}
