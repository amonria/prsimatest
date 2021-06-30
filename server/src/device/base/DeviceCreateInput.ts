import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiskWhereUniqueInput } from "../../disk/base/DiskWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class DeviceCreateInput {
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
  disk?: DiskWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}
export { DeviceCreateInput };
