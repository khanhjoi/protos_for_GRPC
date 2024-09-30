import { Global, Module } from "@nestjs/common";
import { CacheSharedService } from "./cacheShared.service";
import { RedisModule } from "@nestjs-modules/ioredis";
import { config } from "dotenv";
import Redis from "ioredis";

config();

@Global()
@Module({
  imports: [
    RedisModule.forRoot({
      type: "single",
      options: {
        host: process.env.REDIS_HOST || "localhost",
        port: Number(process.env.REDIS_PORT) || 6379,
      },
    }),
  ],
  providers: [
    {
      provide: "CACHE_MANAGER",
      useFactory: () => {
        const redis = new Redis({
          host: process.env.REDIS_HOST || "localhost",
          port: Number(process.env.REDIS_PORT) || 6379,
        });
        return redis;
      },
    },
    {
      provide: "CACHE_SERVICE",
      useClass: CacheSharedService,
    },
  ],
  exports: ["CACHE_SERVICE"],
})
export class CacheSharedModule {}
