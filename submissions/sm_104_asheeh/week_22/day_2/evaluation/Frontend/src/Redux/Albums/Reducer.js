import {
    FETCH_ALBUMS_REQUEST,
    FETCH_ALBUMS_SUCCESS,
    FETCH_ALBUMS_FAILURE
} from './Action'

const initialState = {
    data: [],
    ifData: false,
    isLoading: false,
    query: "",
    error: ""

}

const albumsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ALBUMS_REQUEST:
            return {
                ...state,
                isLoading: true,
                query:action.query
            }

        case FETCH_ALBUMS_SUCCESS:
            return {
                ifData: true,
                data: action.data
            }

        case FETCH_ALBUMS_FAILURE:
            return {
                isLoading: false,
                data: state.data,
                error: action.error
            }
        
        default:
            return state
    }
}

export default albumsReducer