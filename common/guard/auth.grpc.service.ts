import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc, RpcException } from "@nestjs/microservices";
import { AuthServiceClient, GetUserResponse, ValidTokenResponse } from "../../types/auth";
import { Observable } from "rxjs";

@Injectable()
export class AuthGrpcService implements OnModuleInit {
  private authService!: AuthServiceClient;

  constructor(@Inject("Auth_Service") private client: ClientGrpc) {}

  onModuleInit() {
    this.authService = this.client.getService<AuthServiceClient>("AuthService");
  }

  getUserInfo(userId: string): Observable<GetUserResponse> {
    try {
      return this.authService.getInfoById({
        userId: userId,
      });
    } catch (error) {
      // Handle error appropriately
      throw new RpcException("Failed to get user info");
    }
  }

  async getInfoByEmail(email: string) {
    try {
      return this.authService.getInfoByEmail({
        email: email,
      });
    } catch (error) {
      // Handle error appropriately
      throw new RpcException("Failed to get user info by email");
    }
  }

  checkToken(token: string): Observable<ValidTokenResponse> {
    try {
      return this.authService.checkValidToken({
        token: token,
      });
    } catch (error) {
      throw new RpcException("Failed to check token validity");
    }
  }
}
