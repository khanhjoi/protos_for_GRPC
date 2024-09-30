"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let AuthGuard = class AuthGuard {
    constructor(authGrpcService) {
        this.authGrpcService = authGrpcService;
    }
    canActivate(context) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const request = context.switchToHttp().getRequest();
            const token = this.extractTokenFromCookie(request);
            if (!token) {
                throw new common_1.UnauthorizedException();
            }
            try {
                const { payload } = yield (0, rxjs_1.lastValueFrom)((_a = this.authGrpcService) === null || _a === void 0 ? void 0 : _a.checkToken(token));
                request["user"] = payload;
                request["token"] = token;
            }
            catch (_b) {
                throw new common_1.UnauthorizedException();
            }
            return true;
        });
    }
    extractTokenFromCookie(request) {
        return request.cookies["accessToken"]; // 'access_token' is the name of the cookie storing the JWT
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("AUTH_GRPC_SERVICE"))
], AuthGuard);
