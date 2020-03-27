import axios from 'axios'

const FILTER_BUS_REQUEST = "FILTER_BUS_REQUEST"
const FILTER_BUS_SUCCESS = "FILTER_BUS_SUCCESS"
const FILTER_BUS_FAILURE = "FILTER_BUS_FAILURE"
const FILTER_BUS = 'FILTER_BUS'


const fliterBusRequest = (query) => {
    return {
        type: FILTER_BUS_REQUEST,
        query: query || ""
    }
}

const filterBusSuccess = (data) => {
    return {
        type: FILTER_BUS_SUCCESS,
        data: data
    }
}

const filterBusFailure = (error) => {
    return {
        type: FILTER_BUS_FAILURE,
        error: error
    }
}

const filterBus = (url) => {
    return dispatch => {
        dispatch(fliterBusRequest)
        return axios
            .get(url)
            .then(res => {
                console.log(res.data)
                return dispatch(filterBusSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
                return dispatch(filterBusFailure(err))
            })
    }
}

export {
    FILTER_BUS_FAILURE,
    FILTER_BUS_SUCCESS,
    FILTER_BUS_REQUEST,
    FILTER_BUS,
    fliterBusRequest, 
    filterBusSuccess,
    filterBusFailure,
    filterBus
}