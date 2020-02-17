import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './Action'

const initialStore = {
    query:'',
    error:'',
}

const reducer = (state = initialStore,action)=>{
    switch (action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                query:action.query
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                error:state.error
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                error: action.error
            }

        default:
            return state
    }
}

export {reducer}