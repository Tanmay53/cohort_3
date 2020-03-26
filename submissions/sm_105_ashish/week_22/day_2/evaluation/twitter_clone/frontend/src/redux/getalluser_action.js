import axios from "axios";
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_FAILED =  "FETCH_USER_FAILED"


const fetchUserRequest = (query) =>{
    return{
        type:FETCH_USER_REQUEST,
        query:query || ''
    }
    }
const fetchUserSuccess = (data) =>{
        return{
            type:FETCH_USER_SUCCESS,
            data:data
        }
    }
    
const fetchUserFailure = (error) =>{
        return{
            type:FETCH_USER_FAILED,
            error
        }
    }

const getAllUser = (url,payload) =>{
    // console.log(url)
        return dispatch =>{
            dispatch(fetchUserRequest)
            return axios
            .get(url,
                {
                    headers:{"Authorization":`bearer ${payload}`,"Content-Type":"application/json"}
                }
                )
            .then(res=>{
                // console.log(res)
                return dispatch(fetchUserSuccess(res.data))
            })
            .catch(res=>{
                return dispatch(fetchUserFailure(res.error))
            })
        }
    }

export  {
FETCH_USER_REQUEST,
FETCH_USER_SUCCESS,
FETCH_USER_FAILED,
getAllUser
}