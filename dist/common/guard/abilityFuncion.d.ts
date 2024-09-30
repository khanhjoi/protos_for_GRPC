import { ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGrpcService } from "./auth.grpc.service";
import { Ability, RawRuleOf } from "@casl/ability";
import { AppAbility } from "./abilities.factory";
export declare function ProvidedGuard(reflectorParameter?: Reflector, authGrpcServiceParameter?: AuthGrpcService): {
    new (reflector: Reflector | undefined, authGrpcService: AuthGrpcService | undefined): {
        reflector: Reflector | undefined;
        authGrpcService: AuthGrpcService | undefined;
        /**
         * This will return the PureAbility to use for Authentication
         * @param rules List of permissions
         * @returns
         */
        createAbility: (rules: RawRuleOf<AppAbility>[]) => Ability<import("@casl/ability").AbilityTuple, import("@casl/ability").MongoQuery>;
        canActivate(context: ExecutionContext): Promise<boolean>;
    };
};
//# sourceMappingURL=abilityFuncion.d.ts.map