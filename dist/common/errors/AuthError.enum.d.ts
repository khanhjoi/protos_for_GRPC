/**
 * @AuthErrorCode
 * Enum defining error codes for the authentication service.
 * Format:
 * The first digit(s) indicate the service (e.g., 1 for auth),
 * followed by specific error codes.
 * Example: 10001 = auth service (1) + login failed (0001)
 */
export declare enum AuthErrorCode {
    LOGIN_FAILED = 10001,
    REGISTER_FAILED = 10002,
    PASSWORD_IS_NOT_VALID = 10003,
    INPUT_IS_NOT_VALID = 10004,
    USER_NOT_FOUND = 10005,
    USER_CREATE_FAILED = 10006,
    USER_FIND_FAILED = 10007,
    USER_UPDATE_FAILED = 10008,
    USER_DELETE_FAILED = 10009,
    USER_ASSIGN_PERMISSIONS_FAILED = 10010,
    UNAUTHORIZED_ACCESS = 10011,
    ROLE_FIND_FAILED = 10012,
    ROLE_CREATE_FAILED = 10013,
    ROLE_UPDATE_FAILED = 10014,
    ROLE_DELETE_FAILED = 10015,
    ROLE_ASSIGN_PERMISSIONS_FAILED = 10016,
    PERMISSION_FIND_FAILED = 10017,
    PERMISSION_CREATE_FAILED = 10018,
    PERMISSION_UPDATE_FAILED = 10019,
    PERMISSION_DELETE_FAILED = 10020,
    UNKNOWN_ERROR = 10021,
    DEFAULT_ERROR = 10022,
    DATABASE_ERROR = 10023
}
//# sourceMappingURL=AuthError.enum.d.ts.map