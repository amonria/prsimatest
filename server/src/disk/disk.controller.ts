import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiskService } from "./disk.service";
import { DiskControllerBase } from "./base/disk.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("disks")
@common.Controller("disks")
export class DiskController extends DiskControllerBase {
  constructor(
    protected readonly service: DiskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
