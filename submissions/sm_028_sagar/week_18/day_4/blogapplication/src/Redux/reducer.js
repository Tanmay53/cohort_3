import { Login, Logout, SaveUser } from "./actions"


const initialState = {
    data:[],
    isLoggedIn:false,
    currentUserDetails:{}
}

const reducer = (state = initialState, action) =>{
            console.log(state.isLoggedIn)
            switch(action.type){
                case SaveUser:
                    return {
                        ...state,
                        currentUserDetails:action.user
                    }
                case Login:
                    console.log('coming in reducer',action.user)
                    return {
                        ...state,
                        isLoggedIn:!state.isLoggedIn,
                        currentUserDetails:{...action.user}
                    }
                case Logout:
                    return {
                        ...state,
                        isLoggedIn:!state.isLoggedIn
                    }
                default:
                    return {
                        ...state
                    }
            }        
        }

export default reducer