import { User } from "../../types/auth";
import { Redis } from "ioredis";
export declare class CacheSharedService {
    private cacheManager;
    private readonly logger;
    constructor(cacheManager: Redis);
    getValueByKey(key: string): Promise<User>;
    setValue(key: string, user: User | any): Promise<User>;
    deleteValue(key: string): Promise<void>;
}
//# sourceMappingURL=cacheShared.service.d.ts.map