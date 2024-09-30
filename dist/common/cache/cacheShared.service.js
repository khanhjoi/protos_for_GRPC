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
var CacheSharedService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheSharedService = void 0;
const common_1 = require("@nestjs/common");
const http_1 = require("../errors/http");
const AuthError_enum_1 = require("../errors/AuthError.enum");
let CacheSharedService = CacheSharedService_1 = class CacheSharedService {
    constructor(cacheManager) {
        this.cacheManager = cacheManager;
        this.logger = new common_1.Logger(CacheSharedService_1.name);
    }
    getValueByKey(key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.logger.log(`Fetching cache redis for key: ${key}`);
                const cachedData = yield this.cacheManager.get(`${key}`);
                return cachedData ? JSON.parse(cachedData) : null;
            }
            catch (error) {
                throw new http_1.BadRequestException(`Error Cache`, AuthError_enum_1.AuthErrorCode.CACHE_ERROR);
            }
        });
    }
    setValue(key, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.logger.log(`Setting cache redis for key: ${key}`);
                yield this.cacheManager.set(`${key}`, JSON.stringify(user), "EX", 60 * 60); // TTL of 1 days
                return user;
            }
            catch (error) {
                throw new http_1.BadRequestException(`Error Cache`, AuthError_enum_1.AuthErrorCode.CACHE_ERROR);
            }
        });
    }
    deleteValue(key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.logger.log(`Deleting cache redis for key: ${key}`);
                yield this.cacheManager.del(`${key}`);
            }
            catch (error) {
                throw new http_1.BadRequestException(`Error Cache`, AuthError_enum_1.AuthErrorCode.CACHE_ERROR);
            }
        });
    }
};
exports.CacheSharedService = CacheSharedService;
exports.CacheSharedService = CacheSharedService = CacheSharedService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("CACHE_MANAGER"))
], CacheSharedService);
