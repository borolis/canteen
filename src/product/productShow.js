import { ShowController } from 'ra-core';
import React from 'react';
import {
  ArrayField,
  BooleanField,
  CloneButton,
  ChipField,
  Datagrid,
  DateField,
  EditButton,
  NumberField,
  ReferenceArrayField,
  ReferenceManyField,
  RichTextField,
  SelectField,
  ShowView,
  SingleFieldList,
  Tab,
  TabbedShowLayout,
  TextField,
} from 'react-admin';

const ProductShow = props => {
  // debugger
  return(
    <ShowController title={"Kek title"} {...props}>
      {controllerProps => (
        <ShowView {...props} {...controllerProps}>
          <TabbedShowLayout>
            <Tab label="Detail info">
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="description" />
              <BooleanField source="archived" />
              <BooleanField source="locked" />
            </Tab>
          </TabbedShowLayout>
        </ShowView>
      )}
    </ShowController>
  );
}
export default ProductShow;
