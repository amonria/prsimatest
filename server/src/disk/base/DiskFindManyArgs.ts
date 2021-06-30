import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiskWhereInput } from "./DiskWhereInput";
import { Type } from "class-transformer";
import { DiskOrderByInput } from "./DiskOrderByInput";

@ArgsType()
class DiskFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DiskWhereInput,
  })
  @Field(() => DiskWhereInput, { nullable: true })
  @Type(() => DiskWhereInput)
  where?: DiskWhereInput;

  @ApiProperty({
    required: false,
    type: DiskOrderByInput,
  })
  @Field(() => DiskOrderByInput, { nullable: true })
  @Type(() => DiskOrderByInput)
  orderBy?: DiskOrderByInput;

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

export { DiskFindManyArgs };
