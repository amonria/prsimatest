import { ArgsType, Field } from "@nestjs/graphql";
import { DeviceWhereUniqueInput } from "./DeviceWhereUniqueInput";

@ArgsType()
class DeviceFindUniqueArgs {
  @Field(() => DeviceWhereUniqueInput, { nullable: false })
  where!: DeviceWhereUniqueInput;
}

export { DeviceFindUniqueArgs };
