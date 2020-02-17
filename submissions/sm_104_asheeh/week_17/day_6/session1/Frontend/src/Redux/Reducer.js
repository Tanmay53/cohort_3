import {
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE
} from './Action'

const initialState = {
    isLoading: false,
    query: "",
    data: [],
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
                query: action.query
            }
        
        case FETCH_REGISTER_SUCCESS:
            return {
                isLoading: false,
                data: action.data,
                error: state.error
            }
        
        case FETCH_REGISTER_FAILURE:
            return {
                isLoading: false,
                data: state.data,
                error: action.error
            }

        default:
            return state
    }
}

export default reducer