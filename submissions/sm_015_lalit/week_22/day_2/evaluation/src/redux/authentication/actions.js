import axios from 'axios'
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SET_USERNAME,
  MAKE_TWEET,
  FOLLOW_HIM
} from "./actionTypes";



export const loginsuccess=(value)=>({
  type:LOGIN_SUCCESS,
  payload:value

})

export const loginfail=(value)=>({
  type:LOGIN_FAIL,
  payload:value
})

export const logoutsuccess=()=>({
  type:LOGOUT_SUCCESS

})
export const setUsername=(value)=>({
  type:SET_USERNAME,
  payload:value
})

export const makeTweet=(value)=>({
  type:MAKE_TWEET,
  payload:value
})

export const followHim=(value)=>({
  type:FOLLOW_HIM,
  payload:value
})

export const authenticate=(value)=>{
  console.log("authenticate called")
  return dispatch =>{
      axios({
          method:"POST",
          url:"http://localhost:8080/auth/login",
          data:value
      })
      .then(res=>{
          console.log("login success", res.data)
          alert("Login successful")
          dispatch(loginsuccess(res.data))})
      .catch(err=>{
          console.log("login failed", err.message);
          alert("Login failed");
          dispatch(loginfail(err.message))})
  }

}

