"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorCode = void 0;
/**
 * @AuthErrorCode
 * Enum defining error codes for the authentication service.
 * Format:
 * The first digit(s) indicate the service (e.g., 1 for auth),
 * followed by specific error codes.
 * Example: 10001 = auth service (1) + login failed (0001)
 */
var AuthErrorCode;
(function (AuthErrorCode) {
    AuthErrorCode[AuthErrorCode["LOGIN_FAILED"] = 10001] = "LOGIN_FAILED";
    AuthErrorCode[AuthErrorCode["REGISTER_FAILED"] = 10002] = "REGISTER_FAILED";
    AuthErrorCode[AuthErrorCode["PASSWORD_IS_NOT_VALID"] = 10003] = "PASSWORD_IS_NOT_VALID";
    AuthErrorCode[AuthErrorCode["INPUT_IS_NOT_VALID"] = 10004] = "INPUT_IS_NOT_VALID";
    AuthErrorCode[AuthErrorCode["USER_NOT_FOUND"] = 10005] = "USER_NOT_FOUND";
    AuthErrorCode[AuthErrorCode["USER_CREATE_FAILED"] = 10006] = "USER_CREATE_FAILED";
    AuthErrorCode[AuthErrorCode["USER_FIND_FAILED"] = 10007] = "USER_FIND_FAILED";
    AuthErrorCode[AuthErrorCode["USER_UPDATE_FAILED"] = 10008] = "USER_UPDATE_FAILED";
    AuthErrorCode[AuthErrorCode["USER_DELETE_FAILED"] = 10009] = "USER_DELETE_FAILED";
    AuthErrorCode[AuthErrorCode["USER_ASSIGN_PERMISSIONS_FAILED"] = 10010] = "USER_ASSIGN_PERMISSIONS_FAILED";
    AuthErrorCode[AuthErrorCode["UNAUTHORIZED_ACCESS"] = 10011] = "UNAUTHORIZED_ACCESS";
    AuthErrorCode[AuthErrorCode["ROLE_FIND_FAILED"] = 10012] = "ROLE_FIND_FAILED";
    AuthErrorCode[AuthErrorCode["ROLE_CREATE_FAILED"] = 10013] = "ROLE_CREATE_FAILED";
    AuthErrorCode[AuthErrorCode["ROLE_UPDATE_FAILED"] = 10014] = "ROLE_UPDATE_FAILED";
    AuthErrorCode[AuthErrorCode["ROLE_DELETE_FAILED"] = 10015] = "ROLE_DELETE_FAILED";
    AuthErrorCode[AuthErrorCode["ROLE_ASSIGN_PERMISSIONS_FAILED"] = 10016] = "ROLE_ASSIGN_PERMISSIONS_FAILED";
    AuthErrorCode[AuthErrorCode["PERMISSION_FIND_FAILED"] = 10017] = "PERMISSION_FIND_FAILED";
    AuthErrorCode[AuthErrorCode["PERMISSION_CREATE_FAILED"] = 10018] = "PERMISSION_CREATE_FAILED";
    AuthErrorCode[AuthErrorCode["PERMISSION_UPDATE_FAILED"] = 10019] = "PERMISSION_UPDATE_FAILED";
    AuthErrorCode[AuthErrorCode["PERMISSION_DELETE_FAILED"] = 10020] = "PERMISSION_DELETE_FAILED";
    AuthErrorCode[AuthErrorCode["UNKNOWN_ERROR"] = 10021] = "UNKNOWN_ERROR";
    AuthErrorCode[AuthErrorCode["DEFAULT_ERROR"] = 10022] = "DEFAULT_ERROR";
    AuthErrorCode[AuthErrorCode["DATABASE_ERROR"] = 10023] = "DATABASE_ERROR";
})(AuthErrorCode || (exports.AuthErrorCode = AuthErrorCode = {}));
