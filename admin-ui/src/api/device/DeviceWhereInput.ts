import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DeviceWhereInput = {
  disk?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  tag?: StringNullableFilter;
};
