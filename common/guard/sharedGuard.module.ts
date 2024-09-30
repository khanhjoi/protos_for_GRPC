import { Global, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";
import { AbilitiesGuard } from "../guard/abilities.guard";
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
          protoPath: join(__dirname, "../../../auth.proto"),
        },
      },
    ]),
  ],
  providers: [
    {
      provide: "AUTH_GRPC_SERVICE",
      useClass: AuthGrpcService,
    },
  ],
  exports: ["AUTH_GRPC_SERVICE",],
})
export class SharedGuardModule {}
