"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESubject = exports.EAction = void 0;
var EAction;
(function (EAction) {
    EAction["READ"] = "READ";
    EAction["WRITE"] = "WRITE";
    EAction["DELETE"] = "DELETE";
    EAction["UPDATE"] = "UPDATE";
    EAction["MANAGER"] = "MANAGER";
})(EAction || (exports.EAction = EAction = {}));
var ESubject;
(function (ESubject) {
    ESubject["user"] = "User";
    ESubject["route"] = "Route";
    ESubject["port"] = "Port";
    ESubject["vessel"] = "Vessel";
    ESubject["all"] = "all";
})(ESubject || (exports.ESubject = ESubject = {}));
