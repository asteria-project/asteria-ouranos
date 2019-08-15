import { AbstractAsteriaObject, AsteriaSession, AsteriaSessionConfig, StreamProcess, StreamProcessConfig, AsteriaError, AsteriaErrorCode, PrimitiveType, CommonChar, ErrorUtil } from 'asteria-gaia';
import { OuranosSession } from './OuranosSession';
import { OuranosProcessBuilder } from '../util/builder/OuranosProcessBuilder';
import { OuranosLogger } from '../util/logging/OuranosLogger';
import { OuranosErrorBuilder } from '../util/builder/OuranosErrorBuilder';

/**
 * The <code>Ouranos</code> class is the entry point of the Ouranos framework.
 */
export class Ouranos extends AbstractAsteriaObject {

    /**
     * The fully qualified name of this class.
     */
    private static readonly CLASS_NAME: string = 'com.asteria.ouranos.core::Ouranos';

    /**
     * Create a new <code>Ouranos</code> instance.
     */
    constructor() {
        super(Ouranos.CLASS_NAME);
    }

    /**
     * Create and return a new <code>AsteriaSession</code> object.
     * 
     * @param {AsteriaSessionConfig} config the config of the new <code>AsteriaSession</code> object.
     * 
     * @returns {AsteriaSession} a new <code>AsteriaSession</code> object.
     */
    public static createSession(config: AsteriaSessionConfig): AsteriaSession {
        this.checkConfig(config);
        return new OuranosSession(config);
    }

    /**
     * Build and return a new <code>StreamProcess</code> object.
     * 
     * @param {any} processClass the type of the new <code>StreamProcess</code> object.
     * @param {StreamProcessConfig} config the config associated with the new <code>StreamProcess</code> object. 
     * 
     * @returns {StreamProcess} a new <code>StreamProcess</code> object.
     */
    public static buildProcess(processClass: any, config?: StreamProcessConfig): StreamProcess {
        return OuranosProcessBuilder.getInstance().build(processClass, config);
    }

    /**
     * Validate the specified config object.
     * 
     * @param {AsteriaSessionConfig} config the config object to validate.
     */
    private static checkConfig(config: AsteriaSessionConfig): void {
        let error: AsteriaError = null;
        if (config === null || config === undefined) {
            error = OuranosErrorBuilder.getInstance().build(
                AsteriaErrorCode.MISSING_SESSION_CONFIG,
                Ouranos.CLASS_NAME,
                'no configuration is specified'
            );
            OuranosLogger.getLogger().fatal(error.toString());
        } else {
            const name: any = config.name;
            if (name === null || name === undefined) {
                error = OuranosErrorBuilder.getInstance().build(
                    AsteriaErrorCode.MISSING_SESSION_NAME,
                    Ouranos.CLASS_NAME,
                    'no session session name is specified'
                );
                OuranosLogger.getLogger().fatal(error.toString());
            } else if (typeof name !== PrimitiveType.STRING || name === CommonChar.EMPTY) {
                    error = OuranosErrorBuilder.getInstance().build(
                        AsteriaErrorCode.INVALID_SESSION_NAME,
                        Ouranos.CLASS_NAME,
                        'session config must define a valid session name'
                    );
                    OuranosLogger.getLogger().fatal(error.toString()); 
            }
        }
        if (error) {
            throw ErrorUtil.errorToException(error);
        }
    }
}
