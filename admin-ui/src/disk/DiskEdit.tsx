import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DiskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="vendor" source="vendor" />
      </SimpleForm>
    </Edit>
  );
};
