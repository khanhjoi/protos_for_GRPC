import { ForcedSubject, Ability } from "@casl/ability";
import { EAction, ESubject } from "../enums/action.enum";
export declare const actions: readonly [EAction.READ, EAction.MANAGER, EAction.WRITE, EAction.DELETE, EAction.DELETE];
export declare const subjects: readonly [...ESubject[], "all"];
/**
 * Define all action and subjects in application
 */
export type Abilities = [
    (typeof actions)[number],
    ((typeof subjects)[number] | ForcedSubject<Exclude<(typeof subjects)[number], "all">>)
];
export type AppAbility = Ability<Abilities>;
//# sourceMappingURL=abilities.factory.d.ts.map