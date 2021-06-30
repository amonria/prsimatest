import { SortOrder } from "../../util/SortOrder";

export type DeviceOrderByInput = {
  createdAt?: SortOrder;
  disk?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  tag?: SortOrder;
  updatedAt?: SortOrder;
};
