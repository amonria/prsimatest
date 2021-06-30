import { DiskWhereUniqueInput } from "../disk/DiskWhereUniqueInput";

export type DeviceCreateInput = {
  disk?: DiskWhereUniqueInput | null;
  name?: string | null;
};
