import axios from 'axios'

// actions
const FETCH_ALBUMS_REQUEST = "FETCH_ALBUMS_REQUEST"
const FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS"
const FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE"

// action creators
const fetchGetRequest = query => {
    return {
        type: FETCH_ALBUMS_REQUEST,
        query: query || ""
    }
}

const fetchGetSuccess = data => {
    return {
        type: FETCH_ALBUMS_SUCCESS,
        data: data
    }
}

const fetchGetFailure = error => {
    return {
        type: FETCH_ALBUMS_FAILURE,
        error: error
    }
}



// action to fetch the data

const getAlbums = (payloadUrl) => {
    return dispatch => {
        dispatch(fetchGetRequest)
        return axios
            .get(payloadUrl)
            .then(res => {
                console.log(res.data)
                return dispatch(fetchGetSuccess(res.data))
            })
            .catch(err => dispatch(fetchGetFailure(err)))
    }
}


export {
    getAlbums,
    fetchGetRequest,
    fetchGetSuccess,
    fetchGetFailure,
    FETCH_ALBUMS_REQUEST,
    FETCH_ALBUMS_SUCCESS,
    FETCH_ALBUMS_FAILURE
}