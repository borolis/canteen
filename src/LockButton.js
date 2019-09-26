import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { showNotification } from 'react-admin';
import { push } from 'react-router-redux';
import axios from 'axios'
import {
  API_URL,
  AUTH_VALIDATE_TOKEN_URL
} from './config'

class LockButton extends Component {

  state = {
    recordIsLocked: false
  }

  handleClick = () => {
    const { record, basePath } = this.props
    const currentToken = localStorage.getItem('token')
    const lockObjectUrl = API_URL + basePath  + '/'+ record.id + '/lock'
    axios.post(lockObjectUrl, {}, {
      headers: {
        Authorization: "Bearer " + currentToken
      }
    })
      .then((res) => {
        console.log(res)
        this.setState({recordIsLocked: true})
      })
      .catch((err)=> {
        alert(err.response)
        console.log(err.response)
      })

  }

  render() {
    // debugger
    const { locked } = this.props.record
    return (locked || this.state.recordIsLocked)? null : (<Button label="stock" onClick={this.handleClick}>Lock</Button>)
  }
}

export default LockButton;
