import { ArgsType, Field } from "@nestjs/graphql";
import { DiskWhereUniqueInput } from "./DiskWhereUniqueInput";

@ArgsType()
class DeleteDiskArgs {
  @Field(() => DiskWhereUniqueInput, { nullable: false })
  where!: DiskWhereUniqueInput;
}

export { DeleteDiskArgs };
