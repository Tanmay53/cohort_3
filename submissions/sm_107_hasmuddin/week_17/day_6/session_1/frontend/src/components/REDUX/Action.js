import axios from "axios"

export const fetch_res = (response)=>{
    return{
        type:"FETCH_RES",
        payload:response
    }
}
export const fetch_response = (data, url)=>{
    return dispatch=>{
        const config = {
            method:"POST",
            baseURL:"http://127.0.0.1:5000",
            url: '/auth/'+url,
            headers: {'Content-Type': 'application/json'},
            data:data
        }
        axios(config).then((res)=>{
           dispatch(fetch_res(res.data))
        }).catch(er=>console.log(er))
    }
}
