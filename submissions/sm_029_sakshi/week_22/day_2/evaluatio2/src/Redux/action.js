 import axios from 'axios'
export const REGISTER = 'REGISTER'
export const LOGGED_IN = 'LOGGED_IN'
export const GETPROFILE="GETPROFILE"
export const ADDFORMDATA="ADDFORMDATA"
export const REMOVE_ITEM="REMOVE_ITEM"
export const SORTBYSALARY="SORTBYSALARY"
export const SORTBYOPENINGS="SORTBYOPENINGS"
export const FILTERCOMPANY="FILTERCOMPANY"
export const FILTERLOCATION="FILTERLOCATION"


export const data = (payload) => ({
    type: ADDFORMDATA,
    payload
})


export const removeTodo = (payload) => ({
    type: REMOVE_ITEM,
    payload
})


export const sortbysalary=(payload)=>({
    type: SORTBYSALARY,
    payload
})

export const sortbyopenings =(payload)=>({
    type: SORTBYOPENINGS,
    payload
})

export const filterlocation =(payload=>({
    type: FILTERLOCATION,
    payload
}))

export const filtercompany =(payload=>({
    type: FILTERCOMPANY,
    payload
}))

export const login = (payload) => ({
    type: LOGGED_IN,
    payload
})

export const registered = (payload) => ({
    type: REGISTER,
    payload
})




export const register= (payload)=>{
    return dispatch => {
        return axios.post('http://localhost:8080/auth/register', payload)
                    .then(res => {
                        console.log(res.data.message)
                        return dispatch(registered())
                    })
                    .catch(err => console.log(err))
        }   

}

export const loginn= (payload)=>{
    return dispatch => {
        return axios.post('http://localhost:8080/auth/login', payload)
                    .then(res => {
                        console.log(res.data)
                        if(res.data.error===false){
                            console.log(payload)
                            dispatch(login(res.data))                      
                        }
                    })
                    .catch(err => console.log(err))
        }   

}



