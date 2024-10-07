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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilitiesGuard = void 0;
const ability_1 = require("@casl/ability");
const common_1 = require("@nestjs/common");
const abilities_decorator_1 = require("../decorator/abilities.decorator");
const rxjs_1 = require("rxjs");
let AbilitiesGuard = class AbilitiesGuard {
    constructor(reflector, authGrpcService, cacheService) {
        /**
         * This will return the PureAbility to use for Authentication
         * @param rules List of permissions
         * @returns
         */
        this.createAbility = (rules) => {
            const { can, build } = new ability_1.AbilityBuilder(ability_1.Ability);
            // Create rules from the provided permissions
            for (const rule of rules) {
                can(rule.action, rule.subject);
            }
            return build();
        };
        console.log('------------check----', reflector);
        console.log('------------check----', authGrpcService);
        console.log('------------check----', cacheService);
        this.reflector = reflector;
        this.authGrpcService = authGrpcService;
        this.cacheService = cacheService;
    }
    canActivate(context) {
        var _a, e_1, _b, _c;
        var _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            // Get list of rules to access the function
            const rules = this.reflector.get(abilities_decorator_1.CHECK_ABILITY, context.getHandler()) ||
                [];
            const currentUser = context.switchToHttp().getRequest().user;
            if (!currentUser) {
                throw new common_1.ForbiddenException("User not found");
            }
            let user;
            // find data in Redis store first
            const cacheData = yield this.cacheService.getValueByKey(currentUser === null || currentUser === void 0 ? void 0 : currentUser.sub);
            if (cacheData) {
                user = {
                    user: cacheData,
                };
            }
            else {
                // use data don't had then call grpc to get info user
                try {
                    // If AuthGrpcService is provided, fetch the user info
                    if (this.authGrpcService) {
                        user = yield (0, rxjs_1.lastValueFrom)(this.authGrpcService.getUserInfo(currentUser.sub));
                    }
                    else {
                        throw new common_1.ForbiddenException("User service not available");
                    }
                }
                catch (error) {
                    throw new common_1.ForbiddenException("User not found");
                }
            }
            // Get current user permissions
            if (!((_e = (_d = user === null || user === void 0 ? void 0 : user.user) === null || _d === void 0 ? void 0 : _d.role) === null || _e === void 0 ? void 0 : _e.id)) {
                throw new common_1.ForbiddenException("You are not allowed to perform this action");
            }
            try {
                const ability = this.createAbility(Object(user.user.role.permissions));
                try {
                    for (var _f = true, rules_1 = __asyncValues(rules), rules_1_1; rules_1_1 = yield rules_1.next(), _a = rules_1_1.done, !_a; _f = true) {
                        _c = rules_1_1.value;
                        _f = false;
                        const rule = _c;
                        let sub = {};
                        ability_1.ForbiddenError.setDefaultMessage((error) => `You are not allowed to ${error.action} on ${error.subjectType}`);
                        // If rule does not exist in ability => throw error
                        ability_1.ForbiddenError.from(ability).throwUnlessCan(rule.action, (0, ability_1.subject)(rule.subject, sub));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_f && !_a && (_b = rules_1.return)) yield _b.call(rules_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return true;
            }
            catch (error) {
                if (error instanceof ability_1.ForbiddenError) {
                    throw new common_1.ForbiddenException(error.message);
                }
                throw error;
            }
        });
    }
};
exports.AbilitiesGuard = AbilitiesGuard;
exports.AbilitiesGuard = AbilitiesGuard = __decorate([
    (0, common_1.Injectable)()
], AbilitiesGuard);
