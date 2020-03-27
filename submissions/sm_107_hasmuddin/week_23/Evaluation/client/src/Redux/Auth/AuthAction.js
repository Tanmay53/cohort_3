import axios from "axios"


//Login request when user clicked at login button
export const LoginRequest = () => {
    return {
        type: "LOGIN_REQUEST"
    }
}

//when response get 200 success
export const LoginSuccess = (response) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: response
    }
}
//when reponse get 401 failure from server
export const LoginFailure = (error) => {
    return {
        type: "LOGIN_FAILURE",
        payload: error
    }

}

export const Logout = () => {
    return {
        type: "LOGOUT",
    }
}


//signup request when user is request for signup
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

//async function for Login.

export const LoginUser = (userInfo) => {
    return dispatch => {
        dispatch(LoginRequest())
        return axios.post("http://127.0.0.1:5000/auth/login", userInfo)
            .then(res => {
                dispatch(LoginSuccess(res.data))
                localStorage.setItem("token", res.data.token)
            })
            .catch(error => {
                dispatch(LoginFailure(error.response.data))
            })
    }
}

//async function for signup.
export const SignUpUser = (userInfo) => {
    return dispatch => {
        dispatch(SignupRequest())
        return axios.post("http://127.0.0.1:5000/auth/signup", userInfo)
            .then(res => {
                dispatch(RegisterSuccess(res.data))
            })
            .catch(error => {
                dispatch(SignupFailure(error.response.data))
            })
    }
}


