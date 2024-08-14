import { HttpException } from "@nestjs/common";
export interface CommonError {
    statusCode: number;
    errorCode: number;
    message: string;
    timestamp: string;
}
export interface BaseException {
    toJson: () => CommonError;
}
export declare class HttpCommonException extends HttpException implements BaseException {
    protected errorCode: number;
    protected statusCode: number;
    constructor(customErrorMessage: string, errorCode: number, statusCode: number);
    toJson(): CommonError;
}
export declare class BadRequestException extends HttpCommonException {
    constructor(customMessage: string, errorCode: number);
    toJson(): CommonError;
}
export declare class NotFoundException extends HttpCommonException {
    constructor(customMessage: string, errorCode: number);
    toJson(): CommonError;
}
export declare class AuthorizationException extends HttpCommonException {
    constructor(customMessage: string, errorCode: number);
    toJson(): CommonError;
}
//# sourceMappingURL=http.d.ts.map