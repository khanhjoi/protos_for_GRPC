"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const http_1 = require("../errors/http");
const AuthError_enum_1 = require("../errors/AuthError.enum");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        if (exception instanceof http_1.HttpCommonException) {
            const error = exception.toJson();
            response.status(error.statusCode).json(error);
            return;
        }
        const messageFromPipes = exception.getResponse();
        const statusCode = exception.getStatus();
        const cause = exception.cause || {
            errorCode: 10001,
        };
        return response.status(statusCode).json({
            statusCode: statusCode,
            errorCode: messageFromPipes.message
                ? AuthError_enum_1.AuthErrorCode.INPUT_IS_NOT_VALID
                : cause.errorCode,
            message: messageFromPipes.message || exception.message,
            timeStamp: new Date().toISOString(),
        });
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException, http_1.HttpCommonException)
], HttpExceptionFilter);
