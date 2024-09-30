import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Request } from "express";
import { AuthGrpcService } from "./auth.grpc.service";
import { lastValueFrom } from "rxjs";
import { Reflector } from "@nestjs/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject("AUTH_GRPC_SERVICE") private authGrpcService: AuthGrpcService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromCookie(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const { payload } = await lastValueFrom(
        this.authGrpcService?.checkToken(token)
      );

      request["user"] = payload;
      request["token"] = token;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromCookie(request: Request): string | undefined {
    return request.cookies["accessToken"]; // 'access_token' is the name of the cookie storing the JWT
  }
}
