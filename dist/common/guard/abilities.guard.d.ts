import { Reflector } from "@nestjs/core";
import { RawRuleOf, Ability } from "@casl/ability";
import { CanActivate, ExecutionContext } from "@nestjs/common";
import { AppAbility } from "./ablities.factory";
export declare class AbilitiesGuard implements CanActivate {
    private reflector;
    constructor(reflector: Reflector);
    /**
     * This will return the PureAbility to use for Authentication
     * @param rules List of permissions
     * @returns
     */
    createAbility: (rules: RawRuleOf<AppAbility>[]) => Ability<import("@casl/ability").AbilityTuple, import("@casl/ability").MongoQuery>;
    canActivate(context: ExecutionContext): Promise<boolean>;
}
//# sourceMappingURL=abilities.guard.d.ts.map