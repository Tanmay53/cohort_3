import axios from 'axios'


export const LOGIN_SUCCESS="LOGIN_SUCCESS"
export const LOGIN_FAIL="LOGIN_FAIL"
export const SET_USERNAME="SET_USERNAME"

export const setUsername=(value)=>({
    type:SET_USERNAME,
    payload:value
})

export const loginsuccess=(value)=>({
    type:LOGIN_SUCCESS,
    payload:value

})

export const loginfail=(value)=>({
    type:LOGIN_FAIL,
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
