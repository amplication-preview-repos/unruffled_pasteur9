import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PropertyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
