import { Global, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";
import { AbilitiesGuard } from "../guard/abilities.guard";
import { AuthGuard } from "../guard/auth.guard";
import { AuthGrpcService } from "./auth.grpc.service";

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: "Auth_Service",
        transport: Transport.GRPC,
        options: {
          package: "auth",
          url: "localhost:8081",
          protoPath: join(__dirname, "../auth.proto"),
        },
      },
    ]),
  ],
  providers: [AbilitiesGuard, AuthGuard, AuthGrpcService],
  exports: [AbilitiesGuard, AuthGuard, AuthGrpcService],
})
export class SharedGuardModule {}
