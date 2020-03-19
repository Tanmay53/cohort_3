import axios from 'axios'
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"
const GET_BUS = "GET_BUS"

// const LOG_OUT = "LOG_OUT"
// const SET_TOKEN = "SET_TOKEN"
// const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"
// const GET_USERS_FAILURE = "GET_USERS_FAILURE"


const fetchUsersRequest = (query) =>{
    return {
        type:FETCH_USERS_REQUEST,
        query:query || ''
    }
}
const fetchUsersSuccess = (data) =>{
    return {
        type:FETCH_USERS_SUCCESS,
        data:data
    }
}

const fetchUsersFailure = (error) =>{
    return {
        type:FETCH_USERS_FAILURE,
        error:error
    }
}

const getBus = data => {
    return {
        type: GET_BUS,
        data: data
    }
}

const loginUser = (url,payload) =>{
    return dispatch =>{
        dispatch(fetchUsersRequest)
        return axios
            .post(url,payload)
            .then(res => {
                console.log(res.data)
                if(!res.data.error){
                    let data = {
                                "isLoggedIn":true,
                                "token":res.data.token
                            }
                    localStorage.setItem("user",JSON.stringify(data))
                }
                return dispatch(fetchUsersSuccess(res.data))

            })
            .catch(res=>{
                return dispatch(fetchUsersFailure(res.data))
            })
    }
}

const registerUser = (url,payload) =>{
    return dispatch =>{
        dispatch(fetchUsersRequest)
        return axios
            .post(url,payload)
            .then(res=>{
                // alert(res.data.email+" ! "+res.data.message)
                return dispatch(fetchUsersSuccess(res.data))
            })
            .catch(res=>{
                return dispatch(fetchUsersFailure(res.data))
            })
    }
}

const getBuses = (url) => {
    return dispatch => {
        dispatch(fetchUsersRequest)
        return axios
            .get(url)
            .then(res => {
                console.log(res.data)
                return dispatch(fetchUsersSuccess(res.data))
            })
            .catch(res => {
                return dispatch(fetchUsersFailure(res.data))
            })
    }
} 

// const signOut = () =>{
//     return {
//         type:LOG_OUT
//     }
// }
// const checkIsLoggedIn = () =>{
//      return {
//          type:SET_TOKEN
//      }
// }

export {
        FETCH_USERS_REQUEST,
        FETCH_USERS_SUCCESS,
        FETCH_USERS_FAILURE,
        GET_BUS,
        fetchUsersRequest,
        fetchUsersSuccess,
        fetchUsersFailure,
        registerUser,
        loginUser,
        getBuses,
        getBus,
        // createNewUser,
        // signOut,LOG_OUT,checkIsLoggedIn,
        // SET_TOKEN,getUser,
        // GET_USERS_SUCCESS,GetUsersSuccess,
        // GetUsersFailure,GET_USERS_FAILURE
    }