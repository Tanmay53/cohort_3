import axios from 'axios'

const loginUserSuccess = (data) => ({
  type: 'LOGIN_USER_SUCCESS',
  data
})

const loginUserFailure = (message) => ({
  type: 'LOGIN_USER_FAILURE',
  message
})

const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

const signupUserResult = (message) => ({
  type: 'SIGNUP_USER',
  message
})

const signupUser = (data) => {
  return dispatch => {
    axios({
      url: 'http://localhost:5000/auth/signup',
      method: 'post',
      data: data
    }).then(res => {
      return dispatch(signupUserResult(res.data.message))
    })
  }
}

const loginUser = (data) => {
  return dispatch => {
    axios({
      url: 'http://localhost:5000/auth/login',
      method: 'post',
      data: data
    }).then(res => {
      if (!res.data.error) {
        return dispatch(loginUserSuccess(res.data))
      } else {
        return dispatch(loginUserFailure(res.data.message))
      }
    })
  }
}

export { loginUser, signupUser, logoutUser }
