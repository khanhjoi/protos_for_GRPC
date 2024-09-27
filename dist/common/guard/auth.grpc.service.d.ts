import { OnModuleInit } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
export declare class AuthGrpcService implements OnModuleInit {
    private readonly moduleRef;
    private grpcClient;
    private authService;
    /**
     *  This is used to directly get the module client
     *  as it can be injected normally using @Inject()
     *  For more information, refer to: https://docs.nestjs.com/fundamentals/module-ref
     * @param moduleRef
     */
    constructor(moduleRef: ModuleRef);
    onModuleInit(): void;
    getUserInfo(userId: string): Promise<import("rxjs").Observable<import("../../types/auth").GetUserResponse>>;
    getInfoByEmail(email: string): Promise<import("rxjs").Observable<import("../../types/auth").GetUserResponse>>;
    checkToken(token: string): Promise<import("rxjs").Observable<import("../../types/auth").ValidTokenResponse>>;
}
//# sourceMappingURL=auth.grpc.service.d.ts.map