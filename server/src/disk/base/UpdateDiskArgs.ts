import { ArgsType, Field } from "@nestjs/graphql";
import { DiskWhereUniqueInput } from "./DiskWhereUniqueInput";
import { DiskUpdateInput } from "./DiskUpdateInput";

@ArgsType()
class UpdateDiskArgs {
  @Field(() => DiskWhereUniqueInput, { nullable: false })
  where!: DiskWhereUniqueInput;
  @Field(() => DiskUpdateInput, { nullable: false })
  data!: DiskUpdateInput;
}

export { UpdateDiskArgs };
