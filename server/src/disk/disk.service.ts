import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DiskServiceBase } from "./base/disk.service.base";

@Injectable()
export class DiskService extends DiskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
