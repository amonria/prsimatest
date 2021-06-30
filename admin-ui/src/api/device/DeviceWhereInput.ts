import { DiskWhereUniqueInput } from "../disk/DiskWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DeviceWhereInput = {
  disk?: DiskWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
