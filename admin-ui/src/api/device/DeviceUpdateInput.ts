import { DiskWhereUniqueInput } from "../disk/DiskWhereUniqueInput";

export type DeviceUpdateInput = {
  disk?: DiskWhereUniqueInput | null;
  name?: string | null;
};
