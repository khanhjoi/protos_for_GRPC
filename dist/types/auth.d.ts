import { Observable } from "rxjs";
export interface Empty {
}
export interface GetUserByIdRequest {
    userId: string;
}
export interface GetUserByEmailRequest {
    email: string;
}
export interface ValidTokenRequest {
    token: string;
}
export interface GetUserResponse {
    user: User | undefined;
}
export interface ValidTokenResponse {
    payload: Payload | undefined;
}
export interface Payload {
    sub: string;
    roleId: string;
}
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    role: Role | undefined;
}
export interface Role {
    id: string;
    title: string;
    permissions: Permission[];
}
export interface Permission {
    id: string;
    title: string;
    action: string;
    subject: string;
}
export interface AuthServiceClient {
    getInfoById(request: GetUserByIdRequest): Observable<GetUserResponse>;
    getInfoByEmail(request: GetUserByEmailRequest): Observable<GetUserResponse>;
    checkValidToken(request: ValidTokenRequest): Observable<ValidTokenResponse>;
}
export interface AuthServiceController {
    getInfoById(request: GetUserByIdRequest): Promise<GetUserResponse> | Observable<GetUserResponse> | GetUserResponse;
    getInfoByEmail(request: GetUserByEmailRequest): Promise<GetUserResponse> | Observable<GetUserResponse> | GetUserResponse;
    checkValidToken(request: ValidTokenRequest): Promise<ValidTokenResponse> | Observable<ValidTokenResponse> | ValidTokenResponse;
}
export declare function AuthServiceControllerMethods(): (constructor: Function) => void;
export declare const AUTH_SERVICE_NAME = "AuthService";
//# sourceMappingURL=auth.d.ts.map