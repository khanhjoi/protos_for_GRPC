"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjects = exports.actions = void 0;
const action_enum_1 = require("../enums/action.enum");
exports.actions = [
    action_enum_1.EAction.READ,
    action_enum_1.EAction.MANAGER,
    action_enum_1.EAction.WRITE,
    action_enum_1.EAction.DELETE,
    action_enum_1.EAction.DELETE,
];
exports.subjects = [...Object.values(action_enum_1.ESubject), "all"];
