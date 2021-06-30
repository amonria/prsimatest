import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DeviceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="disk" source="disk" />
        <TextInput label="name" source="name" />
        <TextInput label="tag" source="tag" />
      </SimpleForm>
    </Create>
  );
};
