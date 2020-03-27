import { GET_CITY_REQUEST,
    GET_CITY_SUCCESS,
    GET_CITY_FAILURE
} from './action'

const initialState = {
    cities: [],
    error: "",
    busRes: ''
}

const cityReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CITY_REQUEST: return {
            ...state,
        }

        case GET_CITY_SUCCESS: return {
            ...state,
            cities: action.data,
            error: action.error
        }

        case GET_CITY_FAILURE: return {
            ...state,
            error: state.error
        }

        default: return state
    }
}

export default cityReducer
