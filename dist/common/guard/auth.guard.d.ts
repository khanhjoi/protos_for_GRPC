import { CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthGrpcService } from "./auth.grpc.service";
import { Reflector } from "@nestjs/core";
export declare class AuthGuard implements CanActivate {
    private reflector;
    private authGrpcService;
    constructor(reflector: Reflector, authGrpcService: AuthGrpcService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromCookie;
}
//# sourceMappingURL=auth.guard.d.ts.map