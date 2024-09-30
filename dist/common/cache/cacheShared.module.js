"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheSharedModule = void 0;
const common_1 = require("@nestjs/common");
const cacheShared_service_1 = require("./cacheShared.service");
const ioredis_1 = require("@nestjs-modules/ioredis");
const dotenv_1 = require("dotenv");
const ioredis_2 = __importDefault(require("ioredis"));
(0, dotenv_1.config)();
let CacheSharedModule = class CacheSharedModule {
};
exports.CacheSharedModule = CacheSharedModule;
exports.CacheSharedModule = CacheSharedModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            ioredis_1.RedisModule.forRoot({
                type: "single",
                options: {
                    host: process.env.REDIS_HOST || "localhost",
                    port: Number(process.env.REDIS_PORT) || 6379,
                },
            }),
        ],
        providers: [
            {
                provide: "CACHE_MANAGER",
                useFactory: () => {
                    const redis = new ioredis_2.default({
                        host: process.env.REDIS_HOST || "localhost",
                        port: Number(process.env.REDIS_PORT) || 6379,
                    });
                    return redis;
                },
            },
            {
                provide: "CACHE_SERVICE",
                useClass: cacheShared_service_1.CacheSharedService,
            },
        ],
        exports: ["CACHE_SERVICE"],
    })
], CacheSharedModule);
