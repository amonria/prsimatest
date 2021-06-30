import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DeviceServiceBase } from "./base/device.service.base";

@Injectable()
export class DeviceService extends DeviceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
