"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedGuardModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const abilities_guard_1 = require("../guard/abilities.guard");
const auth_grpc_service_1 = require("./auth.grpc.service");
let SharedGuardModule = class SharedGuardModule {
};
exports.SharedGuardModule = SharedGuardModule;
exports.SharedGuardModule = SharedGuardModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: "Auth_Service",
                    transport: microservices_1.Transport.GRPC,
                    options: {
                        package: "auth",
                        url: "localhost:8081",
                        protoPath: (0, path_1.join)(__dirname, "../../../auth.proto"),
                    },
                },
            ]),
        ],
        providers: [
            {
                provide: "AUTH_GRPC_SERVICE",
                useClass: auth_grpc_service_1.AuthGrpcService,
            },
            abilities_guard_1.AbilitiesGuard,
        ],
        exports: ["AUTH_GRPC_SERVICE", abilities_guard_1.AbilitiesGuard],
    })
], SharedGuardModule);
