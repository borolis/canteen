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


class LateOrderList extends Component {

  render() {
// debugger
    return (
      <List title="Late Orders" {...this.props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="created" />
          <TextField source="status_id" />

          {/*<BEditButton />*/}
          {/*<ShowButton />*/}
          {/*<LockButton />*/}
        </Datagrid>
      </List>
    )
  }
}

export default LateOrderList;

