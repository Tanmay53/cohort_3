import { GET_BUS_REQUEST,
        GET_BUS_SUCCESS,
        GET_BUS_FAILURE,
        CHANGE_PAGE_NO,} from './Action'

const initialState = {
    buses: [],
    error: "",
    busRes: '',
    totalRows: 0,
    page: 1
}

const busReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_BUS_REQUEST: return {
            ...state,
        }

        case GET_BUS_SUCCESS: return {
            ...state,
            buses: action.data,
            error: action.error,
            totalRows: action.data.totalRows[0].totalData
        }

        case GET_BUS_FAILURE: return {
            ...state,
            error: state.error
        }

        case CHANGE_PAGE_NO: return {
            ...state,
            page: action.payload
        }

        default: return state
    }
}

export default busReducer
