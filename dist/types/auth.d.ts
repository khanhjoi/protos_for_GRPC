import { Observable } from "rxjs";
export interface Empty {
}
export interface GetInfoUserByIdRequest {
    userId: string;
}
export interface GetInfoUserByEmailRequest {
    email: string;
}
export interface GetInfoUserResponse {
    firstName: string;
    lastName: string;
    email: string;
}
export interface AuthServiceClient {
    getInfoById(request: GetInfoUserByIdRequest): Observable<GetInfoUserResponse>;
    getInfoByEmail(request: GetInfoUserByEmailRequest): Observable<GetInfoUserResponse>;
}
export interface AuthServiceController {
    getInfoById(request: GetInfoUserByIdRequest): Promise<GetInfoUserResponse> | Observable<GetInfoUserResponse> | GetInfoUserResponse;
    getInfoByEmail(request: GetInfoUserByEmailRequest): Promise<GetInfoUserResponse> | Observable<GetInfoUserResponse> | GetInfoUserResponse;
}
export declare function AuthServiceControllerMethods(): (constructor: Function) => void;
export declare const AUTH_SERVICE_NAME = "AuthService";
//# sourceMappingURL=auth.d.ts.map