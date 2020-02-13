import axios from 'axios'


const BOOK_QUOTES = "BOOK_QUOTES"
const BOOK_ROOMS = "BOOk_ROOMS"
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
const SORT_ROOMS = "SORT_ROOMS"
const FILTER_ROOMS = "FILTER_ROOMS"
const PAGINATION = "PAGINATION"


const fetchUsersRquest = query => {
    return {
        type: FETCH_USERS_REQUEST,
        query: query || ""
    }
}

const fetchUsersSuccess = data => {
    return {
        type:FETCH_USERS_SUCCESS,
        data: data
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        error: error
    }
}

const pagination = payload => {
    return {
        type: PAGINATION,
        payload: payload
    }
}

const bookQuotes = (payload) => ({
    type: BOOK_QUOTES,
    payload
})

const bookRooms = (payload, transactionDetails) => ({
    type: BOOK_ROOMS,
    payload,
    transactionDetails
})

const sortRooms = () => ({
    type: SORT_ROOMS,
})

const filterRooms = () => ({
    type: FILTER_ROOMS
})


const loginUsers = (query = null, obj) => {
    return dispatch => {
        dispatch(fetchUsersRquest);
        return axios
            .post(query, obj)
            .then(res => {
                return dispatch(fetchUsersSuccess(res.data));
                // console.log(res.data)
            })
            .catch(err => dispatch(fetchUsersFailure(err)));
    }
}

const signUpUser = (query = null, obj) => {
    console.log()
    return dispatch => {
        dispatch(fetchUsersRquest);
        return axios
            .post(query, {...obj})
            .then(res => dispatch(fetchUsersSuccess(res.data)))
            .catch(err => dispatch(fetchUsersFailure(err)))
    }
}

export { fetchUsersRquest,
         fetchUsersSuccess,
         fetchUsersFailure,
         bookRooms,
         sortRooms,
         loginUsers,
         signUpUser,
         BOOK_QUOTES,
         bookQuotes,
         SORT_ROOMS,
         filterRooms,
         FILTER_ROOMS,
         BOOK_ROOMS,
         pagination,
         PAGINATION,
         FETCH_USERS_REQUEST,
         FETCH_USERS_SUCCESS,
         FETCH_USERS_FAILURE }