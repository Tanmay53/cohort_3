import axios from 'axios'

const GET_BUS_REQUEST = "GET_BUS_REQUEST"
const GET_BUS_SUCCESS = "GET_BUS_SUCCESS"
const GET_BUS_FAILURE = "GET_BUS_FAILURE"


const busRequest = (query) => {
    return {
        type: GET_BUS_REQUEST,
        query: query || ""
    }
}

const busSuccess = (data) => {
    return {
        type: GET_BUS_SUCCESS,
        data: data
    }
}

const busFailure = (error) => {
    return {
        type: GET_BUS_FAILURE,
        error: error
    }
}

const getBuses = (url, token) => {
    return dispatch => {
        dispatch(busRequest)
        return axios
                .get(url, {
                    headers: {
                        "Authorization": `bearer ${token}`,
                        "Content-Type": "application/json"
                    }      
                })
                .then(res => {
                    console.log(res.data)
                    return dispatch(busSuccess(res.data))
                })
                .catch(err => {
                    return dispatch(busFailure(err))
                })
    }
}

const addCity = (url, payload) => {
    return dispatch => {
        dispatch(busRequest)
        return axios
            .post(url, {...payload})   
            .then(res => {
                alert(res.data.message)
                return dispatch(busSuccess(res.data))
            })
            .catch(err => {
                return dispatch(busFailure(err))
            })
    }
}

const addBus = (url, payload) => {
    console.log(payload)
    return dispatch => {
        dispatch(busRequest)
        return axios
            .post(url, {...payload})
            .then(res => {
                console.log(res.data)
                return dispatch(busSuccess(res.data))
            })
            .catch(err => {
                return dispatch(busFailure(err))
            })
    }
}

const deleteBus = (url) => {
    console.log(url)
    return dispatch => {
        dispatch(busRequest)
        return axios
            .post(url)
            .then(res => {
                alert(res.data.message)
                // return dispatch(busSuccess(res.data))
            })
            .catch(err => {
                return dispatch(busFailure(err))
            })
    }
}

const editBus = (url, payload) => {
    return dispatch => {
        dispatch(busRequest)
        return axios
                .post(url, {...payload})
                .then(res => {
                    alert(res.data.message)
                })
                .catch(error => {
                    alert(error)
                })
    }
}

const filterBus = (url, id) => {
    return dispatch => {
        dispatch(busRequest)
        return axios
            .post(url, id)
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export {
    GET_BUS_FAILURE,
    GET_BUS_SUCCESS,
    GET_BUS_REQUEST,
    busRequest, 
    busSuccess,
    busFailure,
    getBuses,
    addCity,
    addBus,
    deleteBus,
    editBus,
    filterBus
}