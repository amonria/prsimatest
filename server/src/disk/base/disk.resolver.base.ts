import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateDiskArgs } from "./CreateDiskArgs";
import { UpdateDiskArgs } from "./UpdateDiskArgs";
import { DeleteDiskArgs } from "./DeleteDiskArgs";
import { DiskFindManyArgs } from "./DiskFindManyArgs";
import { DiskFindUniqueArgs } from "./DiskFindUniqueArgs";
import { Disk } from "./Disk";
import { DiskService } from "../disk.service";

@graphql.Resolver(() => Disk)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class DiskResolverBase {
  constructor(
    protected readonly service: DiskService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Disk",
    action: "read",
    possession: "any",
  })
  async _disksMeta(
    @graphql.Args() args: DiskFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Disk])
  @nestAccessControl.UseRoles({
    resource: "Disk",
    action: "read",
    possession: "any",
  })
  async disks(
    @graphql.Args() args: DiskFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Disk[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Disk",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Disk, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Disk",
    action: "read",
    possession: "own",
  })
  async disk(
    @graphql.Args() args: DiskFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Disk | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Disk",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Disk)
  @nestAccessControl.UseRoles({
    resource: "Disk",
    action: "create",
    possession: "any",
  })
  async createDisk(
    @graphql.Args() args: CreateDiskArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Disk> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Disk",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Disk"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Disk)
  @nestAccessControl.UseRoles({
    resource: "Disk",
    action: "update",
    possession: "any",
  })
  async updateDisk(
    @graphql.Args() args: UpdateDiskArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Disk | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Disk",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Disk"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Disk)
  @nestAccessControl.UseRoles({
    resource: "Disk",
    action: "delete",
    possession: "any",
  })
  async deleteDisk(@graphql.Args() args: DeleteDiskArgs): Promise<Disk | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
