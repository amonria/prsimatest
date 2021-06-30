import { Disk as TDisk } from "../api/disk/Disk";

export const DISK_TITLE_FIELD = "vendor";

export const DiskTitle = (record: TDisk) => {
  return record.vendor;
};
