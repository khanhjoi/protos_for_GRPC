import { Observable } from "rxjs";
export interface Empty {
}
export interface GetInforUserByIdRequest {
    userId: string;
}
export interface GetInforUserByEmailRequest {
    email: string;
}
export interface GetInforUserResponse {
    firstName: string;
    lastName: string;
    email: string;
}
export interface AuthServiceClient {
    getInforById(request: GetInforUserByIdRequest): Observable<GetInforUserResponse>;
    getInforByEmail(request: GetInforUserByEmailRequest): Observable<GetInforUserResponse>;
}
export interface AuthServiceController {
    getInforById(request: GetInforUserByIdRequest): Promise<GetInforUserResponse> | Observable<GetInforUserResponse> | GetInforUserResponse;
    getInforByEmail(request: GetInforUserByEmailRequest): Promise<GetInforUserResponse> | Observable<GetInforUserResponse> | GetInforUserResponse;
}
export declare function AuthServiceControllerMethods(): (constructor: Function) => void;
export declare const AUTH_SERVICE_NAME = "AuthService";
//# sourceMappingURL=auth.d.ts.map