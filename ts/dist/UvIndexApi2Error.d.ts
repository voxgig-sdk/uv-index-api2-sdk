import { Context } from './Context';
declare class UvIndexApi2Error extends Error {
    isUvIndexApi2Error: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { UvIndexApi2Error };
