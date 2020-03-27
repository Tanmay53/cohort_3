import axios from "axios";
const FETCH_TWEET_REQUEST = "FETCH_TWEET_REQUEST"
const FETCH_TWEET_SUCCESS = "FETCH_TWEET_SUCCESS"
const FETCH_TWEET_FAILED =  "FETCH_TWEET_FAILED"


const fetchBlogRequest = (query) =>{
    return{
        type:FETCH_TWEET_REQUEST,
        query:query || ''
    }
    }
const fetchBlogSuccess = (data) =>{
        return{
            type:FETCH_TWEET_SUCCESS,
            data:data
        }
    }
    
const fetchBlogFailure = (error) =>{
        return{
            type:FETCH_TWEET_FAILED,
            error
        }
    }




const getBlog = (url,payload) =>{
    // console.log(url)
        return dispatch =>{
            dispatch(fetchBlogRequest)
            return axios
            .get(url,
                {
                    headers:{"Authorization":`bearer ${payload}`,"Content-Type":"application/json"}
                }
                )
            .then(res=>{
                // console.log(res)
                return dispatch(fetchBlogSuccess(res.data))
            })
            .catch(res=>{
                return dispatch(fetchBlogFailure(res.error))
            })
        }
    }



const addBlog = (url,payload,token) =>{
    console.log(payload,token)
    return dispatch =>{
        dispatch(fetchBlogRequest)
        return axios
        .post(url,payload,{
            headers:{"Content-Type":"application/json","Authorization":`bearer ${token}`}
        }
            )
        .then(res=>{
            alert(res.data.message)
            return dispatch(fetchBlogSuccess(res.data))
        })
        .catch(res=>{
            return dispatch(fetchBlogFailure(res.error))
        })
    }
}



export  {
FETCH_TWEET_REQUEST,
FETCH_TWEET_SUCCESS,
FETCH_TWEET_FAILED,
addBlog ,
getBlog
}