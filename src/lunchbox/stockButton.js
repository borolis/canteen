import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { showNotification } from 'react-admin';
import { push } from 'react-router-redux';
import axios from 'axios'
import { AUTH_VALIDATE_TOKEN_URL } from '../config'

class StockButton extends Component {
  handleClick = () => {
    // const { push, record, showNotification } = this.props
    // const updatedRecord = { ...record, is_approved: true }

    const currentToken = localStorage.getItem('token')

    axios.get(AUTH_VALIDATE_TOKEN_URL, {
      headers: {
        Authorization: "Bearer " + currentToken
      }
    })
      .then(() => {
        alert('ok')
        showNotification('ok')
        return Promise.resolve()
      })
      .catch(()=> {
        alert('error')
        showNotification('error')
        return Promise.reject()
      })

  }

  render() {
    debugger
    return (<Button label="stock"  onClick={this.handleClick} > Set in stock </Button>)
  }
}

export default StockButton;
