import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DiskWhereInput = {
  id?: StringFilter;
  vendor?: StringNullableFilter;
};
