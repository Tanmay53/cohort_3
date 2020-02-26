import axios from 'axios'

// actions
const FETCH_REGISTER_REQUEST = 'FETCH_REGISTER_REQUEST'
const FETCH_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS'
const FETCH_REGISTER_FAILURE = 'FETCH_REGISTER_FAILURE'

// action creators
const fetchPostRequest = query => {
    // console.log("fetch post request action called")
    return {
        type: FETCH_REGISTER_REQUEST,
        query: query || ""
    }
}

const fetchPostSuccess = data => {
    console.log("fetch post success action called")
    return {
        type: FETCH_REGISTER_SUCCESS,
        data: data
    }
}

const fetchPostFailure = error => {
    console.log("fetch post failure action called")
    return {
        type: fetchPostFailure,
        error: error
    }
}

// action to fetch the data
const registerUser = (payloadUserInfo, payloadUrl) => {
    // console.log("fetch data called", query);
    return dispatch => {
        // console.log("dispatching post request action...")
        dispatch(fetchPostRequest)
        // console.log("hello")
        return axios
            .post(payloadUrl, payloadUserInfo)
            .then(res => {
                alert(res.data.message)
                // return dispatch(fetchPostSuccess(data))
            })
            .catch(err => dispatch(fetchPostFailure(err)))

    }
}

const checkUser = (payloadUserCredential, payloadLoginUrl) => {
    return dispatch => {
        dispatch(fetchPostRequest)

        return axios
            .post(payloadLoginUrl, payloadUserCredential)
            .then(res => {
                alert(res.data.message)
                return dispatch(fetchPostSuccess(res.data))
            })
            .catch(err => dispatch(fetchPostFailure(err)))
    }
}

export {
    registerUser,
    checkUser,
    fetchPostFailure,
    fetchPostRequest,
    fetchPostSuccess,
    FETCH_REGISTER_FAILURE,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_REQUEST
}

