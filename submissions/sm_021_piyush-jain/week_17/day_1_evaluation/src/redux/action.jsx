import axios from "axios"
const LOGIN = "LOGIN"
const REGISTER = "REGISTER"
const RESULT = "RESULT"
const VALIDATE = "VALIDATE"
const ADD = "ADD"
const SEARCH="SEARCH"

const login = (data) => {
    var username = data.username
    var password = data.password
    axios.post("http://localhost:8080/auth/login", { "username": username, "password": password })
        .then(res => console.log(res))
}


const result = (data) => {
    return {
        type: RESULT,
        data: data
    }
}

const check = (data) => {
    return dispatch => {
        login(data)
    }
}
const validate = (data) => {
    return {
        type: VALIDATE,
    }
}

const add = (data) => {
    console.log(data)
    return {
        type: ADD,
        payload: data
    }
}

const search=(start,end)=>{
    console.log(start,end)
    return{
        type:SEARCH,
        start:start,
        end:end
    }
}
export { check, login, result, validate, add ,search}