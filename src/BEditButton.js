import React, { Component } from 'react';
import { EditButton } from 'react-admin';


class BEditButton extends Component {
  render() {
    const { locked } = this.props.record
    return (locked)? null : (<EditButton {...this.props}/>)
  }
}

export default BEditButton;
