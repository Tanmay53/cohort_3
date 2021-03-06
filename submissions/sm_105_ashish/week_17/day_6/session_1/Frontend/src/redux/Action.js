import axios from 'axios'
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"
const LOG_OUT = "LOG_OUT"


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
            console.log(res.data)
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

export {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE,fetchUsersRequest,fetchUsersSuccess,fetchUsersFailure,loginUser,createNewUser,signOut,LOG_OUT}