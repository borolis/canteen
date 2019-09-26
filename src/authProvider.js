import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_CHECK
} from 'react-admin'
import { AUTH_TOKEN_URL, AUTH_VALIDATE_TOKEN_URL } from './config'
import axios from 'axios'


export default (type, params) => {
  // called when the user attempts to log in
  if (type === AUTH_LOGIN) {
    const { username, password } = params
    console.log(params)

    return axios.post(AUTH_TOKEN_URL, {
      login: username,
      password: password
    })
      .then(response => {
        localStorage.setItem('username', username)
        localStorage.setItem('token', response.data)
        return Promise.resolve()
      })
      .catch(error => {
        console.log(error.response)
        alert('Неправильный логин или пароль')
        return Promise.reject()
      })
  }

  // called when the user clicks on the logout button
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    return Promise.resolve()
  }

  // called when the API returns an error
  if (type === AUTH_ERROR) {
    const { status } = params
    if (status === 401 || status === 403) {
      alert('API RETURNED ERROR STATUS ' + status)
      return Promise.reject()
    }
    alert('API RETURNED UNKNOWN STATUS ' + params)
    return Promise.resolve()
  }

  // called when the user navigates to a new location
  if (type === AUTH_CHECK) {
      const currentToken = localStorage.getItem('token')

      return axios.get(AUTH_VALIDATE_TOKEN_URL, {
          headers: {
              Authorization: "Bearer " + currentToken
          }
      })
        .then(() => {
            return Promise.resolve()
        })
        .catch(()=> {
            return Promise.reject()
        })
  }
  return Promise.reject('Unknown method')
};
