import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DeviceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="disk" source="disk" />
        <TextInput label="name" source="name" />
        <TextInput label="tag" source="tag" />
      </SimpleForm>
    </Edit>
  );
};
