import axios from 'axios'

const GET_CITY_REQUEST = "GET_CITY_REQUEST"
const GET_CITY_SUCCESS = "GET_CITY_SUCCESS"
const GET_CITY_FAILURE = "GET_CITY_FAILURE"


const cityRequest = (query) => {
    return {
        type: GET_CITY_REQUEST,
        query: query || ""
    }
}

const citySuccess = (data) => {
    return {
        type: GET_CITY_SUCCESS,
        data: data
    }
}

const cityFailure = (error) => {
    return {
        type: GET_CITY_FAILURE,
        error: error
    }
}

const getCities = (url) => {
    return dispatch => {
        dispatch(cityRequest)
        return axios
                .get(url)
                .then(res => {
                    console.log(res.data)
                    return dispatch(citySuccess(res.data))
                })
                .catch(err => {
                    return dispatch(cityFailure(err))
                })
    }
}

export {
    GET_CITY_FAILURE,
    GET_CITY_SUCCESS,
    GET_CITY_REQUEST,
    cityRequest, 
    citySuccess,
    cityFailure,
    getCities,
}