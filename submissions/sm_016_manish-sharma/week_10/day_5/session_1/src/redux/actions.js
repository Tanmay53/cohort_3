import axios from 'axios'

export const FETCH_REQUEST='FETCH_REQUEST'
export const FETCH_GET_SUCCESS='FETCH_GET_SUCCESS'
export const FETCH_POST_SUCCESS1='FETCH_POST_SUCCESS1'
export const FETCH_POST_SUCCESS2='FETCH_POST_SUCCESS2'

export const fetchRequest=(query)=>({
    type: FETCH_REQUEST,
    query:query || ''
})

export const fetchGet=(payload)=>({
    type: FETCH_GET_SUCCESS,
    payload:payload
})

export const fetchPost1=(info,data)=>({
    type: FETCH_POST_SUCCESS1,
    payload:{
        info:info,
        data:data
    }
})

export const fetchPost2=(payload)=>({
    type: FETCH_POST_SUCCESS2,
    payload:payload
})

export const fetchDataLogin=(sentData=null)=>{
    return dispatch =>{
        dispatch(fetchRequest)
        return axios
        .post('http://localhost:8080/auth/login',sentData)
        .then(res=>{
            console.log(res.data)
            if(res.data.error==false){
                alert('LogIn Successfull')
                return dispatch(fetchDataInfo(res.data,sentData.username))
                // return dispatch(fetchPost1(res.data))
            }
            else if(res.data.error==true){
                alert('Invalid login creadentials')
            }
        })
        .catch(err=>console.log(err))
    }
}

export const fetchDataRegister=(sentData=null)=>{
    return dispatch =>{
        dispatch(fetchRequest)
        return axios
        .post('http://localhost:8080/auth/register',sentData)
        .then(res=>{
            console.log(res.data)
            if(res.data.error==false){
                alert('Registration Success')
                return dispatch(fetchPost2(res.data))
            }
            else if(res.data.error==true){
                alert('Registration failed, user already exists')
            }
        })
        .catch(err=>console.log(err))
    }
}

export const fetchDataInfo=(data,name)=>{
    console.log('----going')
    return dispatch =>{
        dispatch(fetchRequest)
        return axios
        .get(`http://localhost:8080/user/${name}`,{headers:{Authorization: `Bearer ${data.token}`}})
        .then(res=>{
            console.log('info',res,'data',data)
            return dispatch(fetchPost1(res.data,data))

        })
        .catch(err=>console.log(err))
    }
}