import axios from 'axios'

export const RETURN_RESPONSE = 'RETURN_RESPONSE'
export const LOGIN = 'LOGIN'
export const ADD_TO_CART="ADD_TO_CART"



export const checkLogin = (payload) => ({
    type: LOGIN,
    payload
})

export const returnResponse = (payload) => ({
    type: RETURN_RESPONSE,
    payload
})

 const AddToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

export const getUsersData = (data) => {
    return dispatch => {
        axios.post("http://localhost:8080/auth/register", data)
    .then(res => {
        console.log("response success", res)
        return dispatch(returnResponse(res.data.message)
        )
    })
    .catch(res => console.log(res))
    }
}


export default AddToCart