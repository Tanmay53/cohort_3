import { FILTER_BUS_FAILURE,
    FILTER_BUS_SUCCESS,
    FILTER_BUS_REQUEST,
    } from './action'

const initialState = {
    filterBuses: [],
    error: "",
    busRes: ''
}

const filterBusReducer = (state = initialState, action) => {
    switch(action.type){
        case FILTER_BUS_REQUEST: return {
            ...state,
        }

        case FILTER_BUS_SUCCESS: return {
            ...state,
            filterBuses: action.data.filteredBus,
            error: action.error,
        }

        case FILTER_BUS_FAILURE: return {
            ...state,
            error: state.error
        }

        default: return state
    }
}

export default filterBusReducer
