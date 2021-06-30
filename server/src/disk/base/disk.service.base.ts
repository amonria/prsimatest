import { PrismaService } from "nestjs-prisma";
import { Prisma, Disk, Device } from "@prisma/client";

export class DiskServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DiskFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiskFindManyArgs>
  ): Promise<number> {
    return this.prisma.disk.count(args);
  }

  async findMany<T extends Prisma.DiskFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiskFindManyArgs>
  ): Promise<Disk[]> {
    return this.prisma.disk.findMany(args);
  }
  async findOne<T extends Prisma.DiskFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiskFindUniqueArgs>
  ): Promise<Disk | null> {
    return this.prisma.disk.findUnique(args);
  }
  async create<T extends Prisma.DiskCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiskCreateArgs>
  ): Promise<Disk> {
    return this.prisma.disk.create<T>(args);
  }
  async update<T extends Prisma.DiskUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiskUpdateArgs>
  ): Promise<Disk> {
    return this.prisma.disk.update<T>(args);
  }
  async delete<T extends Prisma.DiskDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiskDeleteArgs>
  ): Promise<Disk> {
    return this.prisma.disk.delete(args);
  }

  async findDevices(
    parentId: string,
    args: Prisma.DeviceFindManyArgs
  ): Promise<Device[]> {
    return this.prisma.disk
      .findUnique({
        where: { id: parentId },
      })
      .devices(args);
  }
}
