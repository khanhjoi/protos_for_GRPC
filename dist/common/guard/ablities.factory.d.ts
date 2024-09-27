import { ForcedSubject, Ability } from "@casl/ability";
import { Action } from "../enums/action.enum";
export declare const actions: readonly [Action.READ, Action.MANAGER, Action.WRITE, Action.DELETE, Action.DELETE];
export declare const subjects: readonly ["Route", "User", "all"];
/**
 * Define all action and subjects in application
 */
export type Abilities = [
    (typeof actions)[number],
    ((typeof subjects)[number] | ForcedSubject<Exclude<(typeof subjects)[number], "all">>)
];
export type AppAbility = Ability<Abilities>;
//# sourceMappingURL=ablities.factory.d.ts.map