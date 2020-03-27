import axios from 'axios'
import {
LOGIN_REQUEST,
LOGIN_SUCCESS,
LOGIN_FAIL,
LOGOUT_SUCCESS,
SET_USERNAME,
SAVE_USER_DETAILS,
} from './actiontypes'


export const loginRequest=()=>({
    type:LOGIN_REQUEST,

})

export const loginSuccess=(value)=>({
    type:LOGIN_SUCCESS,
    payload:value

})

export const loginFail=(value)=>({
    type:LOGIN_FAIL,
    payload:value
})

export const logoutSuccess=()=>({
    type:LOGOUT_SUCCESS,
})


export const setUsername=(value)=>({
    type:SET_USERNAME,
    payload:value
})

export const saveUserDetails=(value)=>({
    type:SAVE_USER_DETAILS,
    payload:value
})


export const authenticate=(value)=>{
    console.log("authenticate called")
    return dispatch =>{
        dispatch(loginRequest())
        axios({
            method:"POST",
            url:"http://localhost:8080/auth/login",
            data:value
        })
        .then(res=>{
            console.log("login success", res.data)
            alert("Login successful")
            dispatch(loginSuccess(res.data))})
        .catch(err=>{
            console.log("login failed", err.message);
            alert("Login failed");
            dispatch(loginFail(err.message))})
    }

}
