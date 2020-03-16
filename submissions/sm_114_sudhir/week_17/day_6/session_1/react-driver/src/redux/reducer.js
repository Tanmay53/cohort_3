import {
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS
} from './action'

const initialState = {
    isLoding: false,
    query: '',
    data: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                isLoding: true,
                query: action.query
            }
        case FETCH_USER_SUCCESS:
            return {
                isLoding: false,
                data: state.data,
                error: state.error
            }
        case FETCH_USER_FAILURE:
            return {
                isLoding: false,
                // data: data.action,
                error: action.error
            }
        default: 
            return state
    }
}

export default reducer