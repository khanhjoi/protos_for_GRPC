"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjects = exports.actions = void 0;
const action_enum_1 = require("../enums/action.enum");
exports.actions = [
    action_enum_1.Action.READ,
    action_enum_1.Action.MANAGER,
    action_enum_1.Action.WRITE,
    action_enum_1.Action.DELETE,
    action_enum_1.Action.DELETE,
];
exports.subjects = ["Route", "User", "all"];
