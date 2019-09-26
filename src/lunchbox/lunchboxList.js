import React, { Component } from 'react'
import {
  ShowButton,
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin';
import LockButton from '../LockButton'
import BEditButton from '../BEditButton'


class LunchboxList extends Component {

  render() {
// debugger
    return (
      <List title="Все ланчбоксы" {...this.props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="price" />

          <BEditButton />
          <ShowButton />
          <LockButton />
        </Datagrid>
      </List>
    )
  }
}

export default LunchboxList;

