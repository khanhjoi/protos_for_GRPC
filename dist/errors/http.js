"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationException = exports.NotFoundException = exports.BadRequestException = exports.HttpCommonException = void 0;
const common_1 = require("@nestjs/common");
// define abstract class to implement for many error handle
class HttpCommonException extends common_1.HttpException {
    constructor(customErrorMessage, errorCode, statusCode) {
        super({
            message: customErrorMessage,
            errorCode: errorCode,
            statusCode: statusCode,
        }, statusCode);
        this.message = customErrorMessage;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
    }
    toJson() {
        return {
            statusCode: this.statusCode,
            errorCode: this.errorCode,
            message: this.message,
            timestamp: new Date().toISOString(),
        };
    }
}
exports.HttpCommonException = HttpCommonException;
class BadRequestException extends HttpCommonException {
    constructor(customMessage, errorCode) {
        super(customMessage, errorCode, common_1.HttpStatus.BAD_REQUEST);
    }
    toJson() {
        const result = super.toJson();
        return result;
    }
}
exports.BadRequestException = BadRequestException;
class NotFoundException extends HttpCommonException {
    constructor(customMessage, errorCode) {
        super(customMessage, errorCode, common_1.HttpStatus.NOT_FOUND);
    }
    toJson() {
        const result = super.toJson();
        return result;
    }
}
exports.NotFoundException = NotFoundException;
class AuthorizationException extends HttpCommonException {
    constructor(customMessage, errorCode) {
        super(customMessage, errorCode, common_1.HttpStatus.UNAUTHORIZED);
    }
    toJson() {
        const result = super.toJson();
        return result;
    }
}
exports.AuthorizationException = AuthorizationException;
