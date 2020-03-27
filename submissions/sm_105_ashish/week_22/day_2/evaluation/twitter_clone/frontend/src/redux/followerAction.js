import axios from "axios";
const FETCH_FOLLOW_REQUEST = "FETCH_FOLLOW_REQUEST"
const FETCH_FOLLOW_SUCCESS = "FETCH_FOLLOW_SUCCESS"
const FETCH_FOLLOW_FAILED =  "FETCH_FOLLOW_FAILED"


const fetchFollowRequest = (query) =>{
    return{
        type:FETCH_FOLLOW_REQUEST,
        query:query || ''
    }
    }
const fetchFollowSuccess = (data) =>{
        return{
            type:FETCH_FOLLOW_SUCCESS,
            data:data
        }
    }
    
const fetchFollowFailure = (error) =>{
        return{
            type:FETCH_FOLLOW_FAILED,
            error
        }
    }




const followUser = (url,payload,token) =>{
        console.log("hello")
        return dispatch =>{
            dispatch(fetchFollowRequest)
            return axios
            .post(url,payload,{
                headers:{"Content-Type":"application/json","Authorization":`bearer ${token}`}
            }
                )
            .then(res=>{
                alert(res.data.message)
                return dispatch(fetchFollowSuccess(res.data))
            })
            .catch(res=>{
                return dispatch(fetchFollowFailure(res.error))
            })
        }
    }



// const unFollowUser = (url,payload,token) =>{
//     console.log(payload,token)
//     return dispatch =>{
//         dispatch(fetchBlogRequest)
//         return axios
//         .post(url,payload,{
//             headers:{"Content-Type":"application/json","Authorization":`bearer ${token}`}
//         }
//             )
//         .then(res=>{
//             alert(res.data.message)
//             return dispatch(fetchBlogSuccess(res.data))
//         })
//         .catch(res=>{
//             return dispatch(fetchBlogFailure(res.error))
//         })
//     }
// }



export  {
FETCH_FOLLOW_REQUEST,
FETCH_FOLLOW_SUCCESS,
FETCH_FOLLOW_FAILED,
followUser ,
}