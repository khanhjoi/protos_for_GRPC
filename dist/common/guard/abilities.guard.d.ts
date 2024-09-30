import { Reflector } from "@nestjs/core";
import { RawRuleOf, Ability } from "@casl/ability";
import { CanActivate, ExecutionContext } from "@nestjs/common";
import { AppAbility } from "./abilities.factory";
import { AuthGrpcService } from "./auth.grpc.service";
import { CacheSharedService } from "../cache/cacheShared.service";
export declare class AbilitiesGuard implements CanActivate {
    private reflector;
    private authGrpcService;
    private cacheService;
    constructor(reflector: Reflector, authGrpcService: AuthGrpcService, cacheService: CacheSharedService);
    /**
     * This will return the PureAbility to use for Authentication
     * @param rules List of permissions
     * @returns
     */
    createAbility: (rules: RawRuleOf<AppAbility>[]) => Ability<import("@casl/ability").AbilityTuple, import("@casl/ability").MongoQuery>;
    canActivate(context: ExecutionContext): Promise<boolean>;
}
//# sourceMappingURL=abilities.guard.d.ts.map