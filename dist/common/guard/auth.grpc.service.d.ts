import { OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { GetUserResponse, ValidTokenResponse } from "../../types/auth";
import { Observable } from "rxjs";
export declare class AuthGrpcService implements OnModuleInit {
    private client;
    private authService;
    constructor(client: ClientGrpc);
    onModuleInit(): void;
    getUserInfo(userId: string): Observable<GetUserResponse>;
    getInfoByEmail(email: string): Promise<Observable<GetUserResponse>>;
    checkToken(token: string): Observable<ValidTokenResponse>;
}
//# sourceMappingURL=auth.grpc.service.d.ts.map