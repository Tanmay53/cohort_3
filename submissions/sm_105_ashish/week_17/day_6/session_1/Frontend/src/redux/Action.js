import axios from 'axios'
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"


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
            alert(res.data.error+" ! "+res.data.message)
            return dispatch(fetchUsersSuccess(res.data))
        })
        .catch(res=>{
            return dispatch(fetchUsersFailure(res.data))
        })
    }
}

export {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE,fetchUsersRequest,fetchUsersSuccess,fetchUsersFailure,loginUser,createNewUser}