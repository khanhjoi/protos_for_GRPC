import { Observable } from "rxjs";
export interface Empty {
}
export interface GetInforUserRequest {
    userId: string;
}
export interface GetInforUserResponse {
    firstName: string;
    lastName: string;
    email: string;
}
export interface AuthServiceClient {
    getInfor(request: GetInforUserRequest): Observable<GetInforUserResponse>;
}
export interface AuthServiceController {
    getInfor(request: GetInforUserRequest): Promise<GetInforUserResponse> | Observable<GetInforUserResponse> | GetInforUserResponse;
}
export declare function AuthServiceControllerMethods(): (constructor: Function) => void;
export declare const AUTH_SERVICE_NAME = "AuthService";
//# sourceMappingURL=auth.d.ts.map