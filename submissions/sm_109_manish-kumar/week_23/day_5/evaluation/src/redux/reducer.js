import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "./actionType";

const initialState = {
  isAuth :false,
  isLoading:true,
  error:false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return{
        ...state,
        isLoading:true
      }

    case REGISTER_USER_SUCCESS:
      return{
        ...state,
        isLoading:false,
        isAuth:true
      }

    case REGISTER_USER_FAILURE:
      return{
        ...state,
        isLoading:false,
        error:true
    }

    case LOGIN_USER_REQUEST:
      return{
        ...state,
        isLoading:true
      }

    case LOGIN_USER_SUCCESS:
      return{
        ...state,
        isLoading:false,
        isAuth:true
      }

    case LOGIN_USER_FAILURE:
      return{
        ...state,
        isLoading:false,
        error:true
    }

    default :
      return state;
  }
}

export default reducer;