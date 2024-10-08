import { ModuleRef, Reflector } from "@nestjs/core";
import {
  subject,
  RawRuleOf,
  ForbiddenError,
  AbilityBuilder,
  Ability,
} from "@casl/ability";
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Inject,
  OnModuleInit,
} from "@nestjs/common";
import { AppAbility } from "./abilities.factory";
import { CHECK_ABILITY, RequiredRule } from "../decorator/abilities.decorator";
import { AuthGrpcService } from "./auth.grpc.service";
import { lastValueFrom } from "rxjs";
import { CacheSharedService } from "../cache/cacheShared.service";

@Injectable()
export class AbilitiesGuard implements CanActivate {
  private reflector: Reflector;
  private authGrpcService: AuthGrpcService;
  private cacheService: CacheSharedService;

  constructor(
    reflector: Reflector,
    authGrpcService: AuthGrpcService,
    cacheService: CacheSharedService
  ) {
    this.reflector = reflector;
    this.authGrpcService = authGrpcService;
    this.cacheService = cacheService;
  }

  /**
   * This will return the PureAbility to use for Authentication
   * @param rules List of permissions
   * @returns
   */
  createAbility = (rules: RawRuleOf<AppAbility>[]) => {
    const { can, build } = new AbilityBuilder(Ability);

    // Create rules from the provided permissions
    for (const rule of rules) {
      can(rule.action, rule.subject);
    }

    return build();
  };

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Get list of rules to access the function
    const rules: RequiredRule[] =
      this.reflector.get<RequiredRule[]>(CHECK_ABILITY, context.getHandler()) ||
      [];

    const currentUser: any = context.switchToHttp().getRequest().user;

    if (!currentUser) {
      throw new ForbiddenException("User not found");
    }

    let user: any;

    // find data in Redis store first
    const cacheData = await this.cacheService.getValueByKey(currentUser?.sub);

    if (cacheData) {
      user = {
        user: cacheData,
      };
    } else {
      // use data don't had then call grpc to get info user
      try {
        // If AuthGrpcService is provided, fetch the user info
        if (this.authGrpcService) {
          user = await lastValueFrom(
            this.authGrpcService.getUserInfo(currentUser.sub)
          );
        } else {
          throw new ForbiddenException("User service not available");
        }
      } catch (error) {
        throw new ForbiddenException("User not found");
      }
    }

    // Get current user permissions
    if (!user?.user?.role?.id) {
      throw new ForbiddenException(
        "You are not allowed to perform this action"
      );
    }

    try {
      // Check if the user has the subject 'all' in their permissions
      const hasAllAccess = user?.user?.role?.permissions.some(
        (permission: any) => permission.subject === "all"
      );

      // If the user has 'all' as a subject, they get full access
      if (hasAllAccess) {
        return true;
      }

      const ability = this.createAbility(Object(user.user.role.permissions));

      for await (const rule of rules) {
        let sub = {};

        ForbiddenError.setDefaultMessage(
          (error) =>
            `You are not allowed to ${error.action} on ${error.subjectType}`
        );

        // If rule does not exist in ability => throw error
        ForbiddenError.from(ability).throwUnlessCan(
          rule.action,
          subject(rule.subject, sub)
        );
      }
      return true;
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
      throw error;
    }
  }
}
