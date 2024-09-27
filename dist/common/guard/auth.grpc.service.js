"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.AuthGrpcService = void 0;
const common_1 = require("@nestjs/common");
let AuthGrpcService = class AuthGrpcService {
    /**
     *  This is used to directly get the module client
     *  as it can be injected normally using @Inject()
     *  For more information, refer to: https://docs.nestjs.com/fundamentals/module-ref
     * @param moduleRef
     */
    constructor(moduleRef) {
        this.moduleRef = moduleRef;
    }
    onModuleInit() {
        this.grpcClient = this.moduleRef.get("Auth_Service", {
            strict: false,
        });
        this.authService =
            this.grpcClient.getService("AuthService");
    }
    getUserInfo(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.authService.getInfoById({
                    userId: userId,
                });
            }
            catch (error) {
                // Handle error appropriately
                throw new Error("Failed to get user info");
            }
        });
    }
    getInfoByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.authService.getInfoByEmail({
                    email: email,
                });
            }
            catch (error) {
                // Handle error appropriately
                throw new Error("Failed to get user info by email");
            }
        });
    }
    checkToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.authService.checkValidToken({
                    token: token,
                });
            }
            catch (error) {
                throw new Error("Failed to check token validity");
            }
        });
    }
};
exports.AuthGrpcService = AuthGrpcService;
exports.AuthGrpcService = AuthGrpcService = __decorate([
    (0, common_1.Injectable)()
], AuthGrpcService);
