import { PrismaService } from "nestjs-prisma";
import { Prisma, Device, Disk } from "@prisma/client";

export class DeviceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DeviceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeviceFindManyArgs>
  ): Promise<number> {
    return this.prisma.device.count(args);
  }

  async findMany<T extends Prisma.DeviceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeviceFindManyArgs>
  ): Promise<Device[]> {
    return this.prisma.device.findMany(args);
  }
  async findOne<T extends Prisma.DeviceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeviceFindUniqueArgs>
  ): Promise<Device | null> {
    return this.prisma.device.findUnique(args);
  }
  async create<T extends Prisma.DeviceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeviceCreateArgs>
  ): Promise<Device> {
    return this.prisma.device.create<T>(args);
  }
  async update<T extends Prisma.DeviceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeviceUpdateArgs>
  ): Promise<Device> {
    return this.prisma.device.update<T>(args);
  }
  async delete<T extends Prisma.DeviceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeviceDeleteArgs>
  ): Promise<Device> {
    return this.prisma.device.delete(args);
  }

  async getDisk(parentId: string): Promise<Disk | null> {
    return this.prisma.device
      .findUnique({
        where: { id: parentId },
      })
      .disk();
  }
}
