import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,SET_USERNAME} from "./action"

const initialState = {
  isLogged : false,
  isLoading : false,
  token : "",
  errorMsg : "",
  username : ""
}

const reducer = (state=initialState,action) =>{
  switch (action.type) {
    case LOGIN_REQUEST :
      return {
        ...state,
        isLoading : true
      }

    case LOGIN_SUCCESS : 
      return {
        ...state,
        isLogged : true,
        isLoading : false,
        token : action.payload,
        errorMsg : ""
      }

    case LOGIN_FAILURE :
      return {
        ...state,
        isLoading : false,
        isLogged : false,
        token : "",
        errorMsg : action.payload
      }

    case SET_USERNAME :
      return {
        ...state,
        username : action.payload
      }   

    default :
      return state
  }
}

export default reducer