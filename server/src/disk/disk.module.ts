import { Module } from "@nestjs/common";
import { DiskModuleBase } from "./base/disk.module.base";
import { DiskService } from "./disk.service";
import { DiskController } from "./disk.controller";
import { DiskResolver } from "./disk.resolver";

@Module({
  imports: [DiskModuleBase],
  controllers: [DiskController],
  providers: [DiskService, DiskResolver],
  exports: [DiskService],
})
export class DiskModule {}
