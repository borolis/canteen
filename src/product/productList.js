import React from 'react';
import {
  ShowButton,
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin';
import LockButton from '../LockButton'

const ProductList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />

      <TextField source="title" />
      <EditButton />
      <ShowButton />
      <LockButton buttonText="LOCK" />
    </Datagrid>
  </List>
);

export default ProductList
