import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { AuthServiceClient } from "../../types/auth";
import { ModuleRef } from "@nestjs/core";

@Injectable()
export class AuthGrpcService implements OnModuleInit {
  private grpcClient!: ClientGrpc;
  private authService!: AuthServiceClient; // Use definite assignment assertion

  /**
   *  This is used to directly get the module client
   *  as it can be injected normally using @Inject()
   *  For more information, refer to: https://docs.nestjs.com/fundamentals/module-ref
   * @param moduleRef
   */
  constructor(private readonly moduleRef: ModuleRef) {}

  onModuleInit() {
    this.grpcClient = this.moduleRef.get<ClientGrpc>("Auth_Service", {
      strict: false,
    });
    this.authService =
      this.grpcClient.getService<AuthServiceClient>("AuthService");
  }

  async getUserInfo(userId: string) {
    try {
      return this.authService.getInfoById({
        userId: userId,
      });
    } catch (error) {
      // Handle error appropriately
      throw new Error("Failed to get user info");
    }
  }

  async getInfoByEmail(email: string) {
    try {
      return this.authService.getInfoByEmail({
        email: email,
      });
    } catch (error) {
      // Handle error appropriately
      throw new Error("Failed to get user info by email");
    }
  }

  async checkToken(token: string) {
    try {
      return this.authService.checkValidToken({
        token: token,
      });
    } catch (error) {
      throw new Error("Failed to check token validity");
    }
  }
}
