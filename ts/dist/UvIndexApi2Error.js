"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UvIndexApi2Error = void 0;
class UvIndexApi2Error extends Error {
    isUvIndexApi2Error = true;
    sdk = 'UvIndexApi2';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.UvIndexApi2Error = UvIndexApi2Error;
//# sourceMappingURL=UvIndexApi2Error.js.map