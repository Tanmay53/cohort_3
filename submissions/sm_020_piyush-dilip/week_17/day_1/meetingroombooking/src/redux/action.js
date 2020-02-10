import axios from 'axios'
export const IS_LOGGED_IN = 'IS_LOGGED_IN'
export const BOOKING_MEETING_ROOM = 'BOOKING_MEETING_ROOM'
export const SORT_PRICE_ASC = 'SORT_PRICE_ASC'
export const SORT_PRICE_DESC = 'SORT_PRICE_DESC'
export const SORT_CAPACITY_ASC = 'SORT_CAPACITY_ASC'
export const SORT_CAPACITY_DESC = 'SORT_CAPACITY_DESC'
export const FILTER_BY_FLOOR_NUMBER = 'FILTER_BY_FLOOR_NUMBER'
export const SORT = 'SORT'
export const REGISTER = 'REGISTER'
export const REGISTERED = 'REGISTERED'


export const login = (payload) => ({
    type: IS_LOGGED_IN,
    payload
})

export const registered = (payload) => ({
    type: REGISTERED,
    payload
})


export const bookMeetingRoom = (payload) => ({
    type: BOOKING_MEETING_ROOM,
    payload
})

export const filterByFloor = (payload) => ({
    type: FILTER_BY_FLOOR_NUMBER,
    payload
})

export const sort = (payload) => ({
    type: SORT,
    payload
})

export const checkLogin = (payload) => {
    return dispatch => {
        return axios.post('http://localhost:8080/auth/login', payload)
                    .then( res => {
                        console.log(res)
                        return dispatch(login(res.data.token))
                    })
                    .catch(err => console.log(err))
    }
}

export const register = (payload) =>{
    return dispatch => {
        return axios.post('http://localhost/auth/register', payload)
                    .then(res => {
                        alert(res.data.message)
                        return dispatch(registered())
                    })
                    .catch(err => console.log(err))
        }   
}


