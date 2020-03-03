import axios from 'axios'
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"
const LOG_OUT = "LOG_OUT"
const SET_TOKEN = "SET_TOKEN"
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"
const GET_USERS_FAILURE = "GET_USERS_FAILURE"


const fetchUsersRequest = (query) =>{
return{
    type:FETCH_USERS_REQUEST,
    query:query || ''
}
}
const fetchUsersSuccess = (data) =>{
    return{
        type:FETCH_USERS_SUCCESS,
        data:data
    }
}

const GetUsersSuccess = (data) =>{
    return{
        type:GET_USERS_SUCCESS,
        data:data
    }
}
const GetUsersFailure = (error) =>{
    return{
        type:GET_USERS_FAILURE,
        error
    }
}
const fetchUsersFailure = (error) =>{
    return{
        type:FETCH_USERS_FAILURE,
        error:error
    }
}

const loginUser = (url,payload) =>{
    return dispatch =>{
        dispatch(fetchUsersRequest)
        return axios
        .post(url,payload)
        .then(res=>{
            alert(res.data.message)
            if(!res.data.error){
                let data = {"isLoggedIn":true,"token":res.data.token}
                localStorage.setItem("user",JSON.stringify(data))
            }
            return dispatch(fetchUsersSuccess(res.data))

        })
        .catch(res=>{
            return dispatch(fetchUsersFailure(res.data))
        })
    }
}

const createNewUser = (url,payload) =>{
    return dispatch =>{
        dispatch(fetchUsersRequest)
        return axios
        .post(url,payload)
        .then(res=>{
            alert(res.data.email+" ! "+res.data.message)
            return dispatch(fetchUsersSuccess(res.data))
        })
        .catch(res=>{
            return dispatch(fetchUsersFailure(res.data))
        })
    }
}
const signOut = () =>{
    return {
        type:LOG_OUT
    }
}
const checkIsLoggedIn = () =>{
     return {
         type:SET_TOKEN
     }
}

const getUser = (url,payload) =>{
    return dispatch =>{
        dispatch(fetchUsersRequest)
        return axios
        .get(url,
            {
                headers:{"Authorization":`bearer ${payload}`,"Content-Type":"application/json"}
            }
            )
        .then(res=>{
            console.log(res)
            return dispatch(GetUsersSuccess(res.data))
        })
        .catch(res=>{
            return dispatch(GetUsersFailure(res.error))
        })
    }
}

export {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE,
    fetchUsersRequest,fetchUsersSuccess,fetchUsersFailure,
    loginUser,createNewUser,signOut,LOG_OUT,checkIsLoggedIn,SET_TOKEN,getUser,
    GET_USERS_SUCCESS,GetUsersSuccess,
    GetUsersFailure,GET_USERS_FAILURE}