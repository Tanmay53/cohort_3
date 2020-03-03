import axios from 'axios'
import swal from 'sweetalert'

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"


const fetchUserRequest = query => {
    return {
        type: FETCH_USER_REQUEST,
        query: query || ""
    }
}

const fetchUserSuccess = data => {
    return {
        type: FETCH_USER_SUCCESS,
        data: data
    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        error: error
    }
}

const signUpUser = (query = null, obj) => {
    return dispatch => {
        dispatch(fetchUserRequest)
        return axios
                .post(query, obj)
                .then(res => {
                    // alert(res.data.message)
                    // return dispatch(fetchUserSuccess(res.data))
                    swal({
                        title: res.data.message,
                        icon: "success",
                        button: "Okay",
                      });
                })
                .catch(err => {
                    swal({
                        title: err,
                        icon: "failed",
                        button: "Try Again",
                      });
                    return dispatch(fetchUserFailure(err))
                })

    }
}

const loginUser = (query = null, obj) => {
    return dispatch => {
        dispatch(fetchUserRequest)
        return axios
                .post(query, obj)
                .then(res => {
                    // alert(res.data.message)
                    swal({
                        title: res.data.message,
                        icon: "success",
                        button: "Okay",
                      });
                })
                .catch(err => dispatch(fetchUserFailure(err)))
    }
}

export {
    signUpUser,
    loginUser,
    fetchUserFailure,
    fetchUserRequest,
    fetchUserSuccess,
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS
}