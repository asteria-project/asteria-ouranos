import { AsteriaStream, AsteriaContext, StreamEventType, StreamProcessConfig } from 'asteria-gaia';
import { Readable } from 'stream';
import * as fs from 'fs';

/**
 * The <code>TestReadableStream</code> class provides an readable stream implementation for unit testing.
 */
export class TestReadableStream extends Readable implements AsteriaStream {

    /**
     * @inheritdoc
     */
    public getClassName(): string {
        return 'TestReadableStream';
    }

    /**
     * @inheritdoc
     */
    public init(config: StreamProcessConfig, context: AsteriaContext): void {
        const readStream: fs.ReadStream = fs.createReadStream('utils/test-utils/data/file.txt');
        readStream.on(StreamEventType.DATA, (chunk: Buffer)=> {
            readStream.destroy();
            this.push(chunk.toString());
            this.push(null);
            this.destroy();
        });
    }

    /**
     * @inheritdoc
     */
    public _read(size: number): void {}
}
