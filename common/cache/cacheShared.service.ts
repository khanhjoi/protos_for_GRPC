import { Inject, Injectable, Logger } from "@nestjs/common";
import { User } from "../../types/auth";
import { BadRequestException } from "../errors/http";
import { AuthErrorCode } from "../errors/AuthError.enum";
import { Redis } from "ioredis";

@Injectable()
export class CacheSharedService {
  private readonly logger = new Logger(CacheSharedService.name);

  constructor(@Inject("CACHE_MANAGER") private cacheManager: Redis) {}

  async getValueByKey(key: string): Promise<User> {
    try {
      this.logger.log(`Fetching cache redis for key: ${key}`);
      const cachedData: any = await this.cacheManager.get(`${key}`);

      return cachedData ? JSON.parse(cachedData) : null;
    } catch (error) {
      throw new BadRequestException(`Error Cache`, AuthErrorCode.CACHE_ERROR);
    }
  }

  async setValue(key: string, user: User|any): Promise<User> {
    try {
      this.logger.log(`Setting cache redis for key: ${key}`);

      await this.cacheManager.set(
        `${key}`,
        JSON.stringify(user),
        "EX",
        60 * 60
      ); // TTL of 1 days
      return user;
    } catch (error) {
      throw new BadRequestException(`Error Cache`, AuthErrorCode.CACHE_ERROR);
    }
  }

  async deleteValue(key: string): Promise<void> {
    try {
      this.logger.log(`Deleting cache redis for key: ${key}`);
      await this.cacheManager.del(`${key}`);
    } catch (error) {
      throw new BadRequestException(`Error Cache`, AuthErrorCode.CACHE_ERROR);
    }
  }
}
