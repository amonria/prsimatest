import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiskWhereUniqueInput } from "../../disk/base/DiskWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
@InputType()
class DeviceWhereInput {
  @ApiProperty({
    required: false,
    type: () => DiskWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DiskWhereUniqueInput)
  @IsOptional()
  @Field(() => DiskWhereUniqueInput, {
    nullable: true,
  })
  disk?: DiskWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;
}
export { DeviceWhereInput };
