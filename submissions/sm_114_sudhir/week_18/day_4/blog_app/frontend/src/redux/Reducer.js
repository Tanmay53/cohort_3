import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE, LOG_OUT, SET_TOKEN,GET_USERS_SUCCESS,GET_USERS_FAILURE} from './Action'

const initialStore = {
    query:'',
    error:'',
    token:'',
    user:{}
}

const reducer = (state = initialStore,action)=>{
    switch (action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                query:action.query
            }
        case FETCH_USERS_SUCCESS:
            if(!action.data.error){
            return {
                ...state,
                error:state.error,
                token:action.data.token,
            }
         }
         else{
             return {
                 ...state,
                 error:state.error,
                 token:''
             }
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
        case SET_TOKEN:
            let user = JSON.parse(localStorage.getItem('user'))
            if(user){
                return {
                    ...state,
                    token:user["token"]
                }
            }
            else{
                return state
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                user:{...action.data.user}
            }
        case GET_USERS_FAILURE:
            return {
                ...state
            }

        default:
            return state
    }
}

export {reducer}