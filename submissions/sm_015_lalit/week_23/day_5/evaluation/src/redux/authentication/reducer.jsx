import { LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    SET_USERNAME,
    SAVE_USER_DETAILS } from './actiontypes'

const initialState={
    isLogged:false,
    isLoading:false,
    username:"",
    token:"",
    errMsg:"",
    userDetails:""
}

export const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case LOGIN_REQUEST:
            return{
                ...state,
                isLoading:true
            }

        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isLogged:true,
                token:action.payload.token 
            }
    
        case LOGIN_FAIL:
            return{
                ...state,
                isLoading:false,
                errMsg:action.payload
            }
        case LOGOUT_SUCCESS:
        return{
            ...state,
            isLogged:false,
        }

        case SET_USERNAME:
            return{
                ...state,
                username:action.payload
            }
        case SAVE_USER_DETAILS:
            return{
                ...state,
                userDetails:action.payload
            }    

         default:
             return state
    }
}