import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE, LOG_OUT} from './Action'

const initialStore = {
    query:'',
    error:'',
    token:'',
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
                error:state.error,
                token:action.data.token,
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case LOG_OUT:
            localStorage.removeItem('user')
            return{
                ...state,
                token:''
            }

        default:
            return state
    }
}

export {reducer}