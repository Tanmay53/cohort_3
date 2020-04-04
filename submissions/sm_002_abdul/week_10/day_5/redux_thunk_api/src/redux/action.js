import axios from "axios"

const LOGIN_REQUEST = "LOGIN_REQUEST"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAILURE = "LOGIN_FAILURE"
const SET_USERNAME = "SET_USERNAME"

const loginRequest = () =>{
  return {
    type : LOGIN_REQUEST
  }
} 

const loginSuccess = (value) =>{
  return {
    type : LOGIN_SUCCESS,
    payload : value
  }
}

const loginFailure = (error) =>{
  return {
    type : LOGIN_FAILURE,
    payload : error
  }
}

const setUsername = (name) =>{
  return {
    type : SET_USERNAME,
    payload : name
  }
}

const login = (value) =>{
  return (dispatch)=>{
    dispatch(loginRequest())
    axios({
      method : "post",
      url : 'http://localhost:8080/auth/login',
      data : value
    })
    .then (resp=>{
      console.log(resp)
      dispatch(loginSuccess(resp.data.token))
    })
    .catch (error=>{
      console.log(error)
      dispatch(loginFailure(error.message))
    })
  }
}





export {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_USERNAME,
  loginRequest,
  loginSuccess,
  loginFailure,
  setUsername,
  login
}
