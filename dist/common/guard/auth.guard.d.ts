import { CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthGrpcService } from "./auth.grpc.service";
export declare class AuthGuard implements CanActivate {
    private authGrpcService;
    constructor(authGrpcService: AuthGrpcService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromCookie;
}
//# sourceMappingURL=auth.guard.d.ts.map