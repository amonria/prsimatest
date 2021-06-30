import { Disk } from "../disk/Disk";

export type Device = {
  createdAt: Date;
  disk?: Disk | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
