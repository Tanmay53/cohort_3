import axios from 'axios';




export const fetchRequest = (query) => ({
    type: "FETCH_REQUEST",
    query: query || ''
})


export const fetchGet = (payload) => ({
    type: "FETCH_GET_SUCCESS",
    payload: payload
})

export const fetchPostLogin = (info, data) => ({
    type: "FETCH_POST_LOGIN",
    payload: {
        info: info,
        data: data
    }
})

export const fetchPostRegister = (payload) => ({
    type: "FETCH_POST_REGISTER",
    payload: payload
})

export const fetchDataLogin = (sentData = null) => {
    return dispatch => {
        dispatch(fetchRequest)
        return axios
            .post('http://localhost:8080/auth/login', sentData)
            .then(res => {
                console.log(res.data)
                if (res.data.error == false) {
                    alert('LogIn Successfull')
                    return dispatch(fetchDataInfo(res.data, sentData.username))
                    // return dispatch(fetchPostLogin(res.data))
                }
                else if (res.data.error == true) {
                    alert('Invalid login creadentials')
                }
            })
            .catch(err => console.log(err))
    }
}

export const fetchDataRegister = (sentData = null) => {
    return dispatch => {
        dispatch(fetchRequest)
        return axios
            .post('http://localhost:8080/auth/register', sentData)
            .then(res => {
                console.log(res.data)
                if (res.data.error == false) {
                    alert('Registration Success')
                    return dispatch(fetchPostRegister(res.data))
                }
                else if (res.data.error == true) {
                    alert('Registration failed, user already exists')
                }
            })
            .catch(err => console.log(err))
    }
}

export const fetchDataInfo = (data, name) => {
    console.log('----going')
    return dispatch => {
        dispatch(fetchRequest)
        return axios
            .get(`http://localhost:8080/user/${name}`, { headers: { Authorization: `Bearer ${data.token}` } })
            .then(res => {
                console.log('info', res, 'data', data)
                return dispatch(fetchPostLogin(res.data, data))

            })
            .catch(err => console.log(err))
    }
}

// adding products
export const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}

export const logoutUser = () => {
    return {
        type: "LOGOUT_USER"
    }
}