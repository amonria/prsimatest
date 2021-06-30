import { ArgsType, Field } from "@nestjs/graphql";
import { DiskWhereUniqueInput } from "./DiskWhereUniqueInput";

@ArgsType()
class DiskFindUniqueArgs {
  @Field(() => DiskWhereUniqueInput, { nullable: false })
  where!: DiskWhereUniqueInput;
}

export { DiskFindUniqueArgs };
