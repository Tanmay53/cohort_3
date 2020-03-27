import axios from "axios"
import { LoginUser } from "./AuthAction"


export const SignupRequest = () => {
    return {
        type: "SIGNUP_REQUEST"
    }

}
//when user will fail with singup with somehow. it throww an errr
export const SignupFailure = (error) => {
    return {
        type: "SIGNUP_FAILURE",
        payload: error
    }
}

export const RegisterSuccess = (user) => {
    return {
        type: "REGISTER",
        payload: user
    }
}

export const SignUpUser = (userInfo) => {
    return dispatch => {
        dispatch(SignupRequest())
        return axios.post("http://127.0.0.1:5000/auth/signup", userInfo)
            .then(res => {
                dispatch(RegisterSuccess(res.data))
                dispatch(LoginUser({ "email": userInfo.email, "password": userInfo.password }))
            })
            .catch(error => {
                dispatch(SignupFailure(error.response.data))
            })
    }
}
