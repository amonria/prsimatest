import { Device } from "../device/Device";

export type Disk = {
  createdAt: Date;
  devices?: Array<Device>;
  id: string;
  updatedAt: Date;
  vendor: string | null;
};
