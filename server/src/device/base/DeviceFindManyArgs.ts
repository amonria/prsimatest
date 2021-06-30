import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DeviceWhereInput } from "./DeviceWhereInput";
import { Type } from "class-transformer";
import { DeviceOrderByInput } from "./DeviceOrderByInput";

@ArgsType()
class DeviceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DeviceWhereInput,
  })
  @Field(() => DeviceWhereInput, { nullable: true })
  @Type(() => DeviceWhereInput)
  where?: DeviceWhereInput;

  @ApiProperty({
    required: false,
    type: DeviceOrderByInput,
  })
  @Field(() => DeviceOrderByInput, { nullable: true })
  @Type(() => DeviceOrderByInput)
  orderBy?: DeviceOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DeviceFindManyArgs };
