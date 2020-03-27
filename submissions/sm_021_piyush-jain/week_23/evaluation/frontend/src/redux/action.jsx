import axios from "axios"
var request = require('request');
const LOGIN="LOGIN"
const LOGOUT="LOGOUT"
const PAGINATION="PAGINATION"
const PER_PAGE="PER_PAGE"
const ACTIVE_PAGE="ACTIVE_PAGE"


const logout=()=>{
    return{
        type:"LOGOUT",
    }
}

const login=(token,person)=>{
    console.log(person)
    return{
        type:"LOGIN",
        payload:token,
        personType:person
    }
}

const signUp=(email,password)=>{
    return async dispatch=>{
        alert("called")
        dispatch(request())
          return  await axios({
            method: 'post',
            url: "http://127.0.0.1:5000/auth/login",
            data: {
                email: email,
                password: password
            }
        })
        .then(res=>dispatch(login(res.data.token,res.data.type)))
        .catch(err=>dispatch(logout) )           
    }
}


const page=(payload)=>{
    return {
        type:"PAGINATION",
        payload:payload
    }
}

const perPage=(payload)=>{
    return {
        type:"PER_PAGE",
        payload:Number(payload)
    }
}

const activePage=(payload)=>{
    return {
        type:"ACTIVE_PAGE",
        payload:Number(payload)
    }
}


export {login,logout,signUp,page,perPage,activePage}