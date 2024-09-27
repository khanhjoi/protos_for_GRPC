export declare const CHECK_ABILITY = "check_ability";
export interface RequiredRule {
    action: string;
    subject: string;
    conditions?: any;
}
export declare const CheckAbilities: (...requirements: RequiredRule[]) => import("@nestjs/common").CustomDecorator<string>;
//# sourceMappingURL=abilities.decorator.d.ts.map