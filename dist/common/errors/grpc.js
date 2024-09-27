"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonGRPCException = void 0;
const microservices_1 = require("@nestjs/microservices");
class CommonGRPCException extends microservices_1.RpcException {
    constructor(customMessage, errorCode) {
        super({
            message: customMessage,
            errorCode
        });
        this.errorCode = errorCode;
        this.message = customMessage;
    }
    ;
}
exports.CommonGRPCException = CommonGRPCException;
