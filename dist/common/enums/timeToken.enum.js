"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeToken = void 0;
var TimeToken;
(function (TimeToken) {
    TimeToken[TimeToken["RESET_PASSWORD"] = 86400000] = "RESET_PASSWORD";
    TimeToken[TimeToken["REFRESH_TOKEN"] = 259200000] = "REFRESH_TOKEN";
    TimeToken[TimeToken["VERIFY_TOKEN"] = 259200000] = "VERIFY_TOKEN";
})(TimeToken || (exports.TimeToken = TimeToken = {}));
