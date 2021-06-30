import { ArgsType, Field } from "@nestjs/graphql";
import { DiskCreateInput } from "./DiskCreateInput";

@ArgsType()
class CreateDiskArgs {
  @Field(() => DiskCreateInput, { nullable: false })
  data!: DiskCreateInput;
}

export { CreateDiskArgs };
