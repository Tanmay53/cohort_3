import { GET_BUS_REQUEST,
        GET_BUS_SUCCESS,
        GET_BUS_FAILURE,} from './Action'

const initialState = {
    buses: [],
    error: "",
    busRes: ''
}

const busReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_BUS_REQUEST: return {
            ...state,
        }

        case GET_BUS_SUCCESS: return {
            ...state,
            buses: action.data,
            error: action.error
        }

        case GET_BUS_FAILURE: return {
            ...state,
            error: state.error
        }

        default: return state
    }
}

export default busReducer
