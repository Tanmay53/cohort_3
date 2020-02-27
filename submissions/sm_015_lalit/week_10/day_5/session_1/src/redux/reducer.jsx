import { LOGIN_SUCCESS,LOGIN_FAIL,SET_USERNAME } from './action'

const initialState={
    islogged:false,
    username:"",
    token:"",
    errMsg:""
}

export const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case LOGIN_SUCCESS:
        let copyState={...state}
        copyState.islogged=true
        copyState.token=action.payload.token  
        return copyState;
    
        case LOGIN_FAIL:
         let copyState2={...state}
         copyState2.errMsg=action.payload
         return copyState2;

        case SET_USERNAME:
            let copystate3={...state}
            copystate3.username=action.payload
            return copystate3

         default:
             return state
    }
}