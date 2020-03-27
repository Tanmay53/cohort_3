import {
    REG_ADM_REQ,
    REG_ADM_Y,
    REG_ADM_N,
    
    LOGIN_ADM_Y,
    LOGIN_ADM_N,
    LOGIN_ADM_REQ
  } from "./ActionType";
  
  const initialState = {
    isAuth :false,
    isLoading:true,
    error:false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case REG_ADM_REQ:
        return{
          ...state,
          isLoading:true
        }
  
      case REG_ADM_Y:
        return{
          ...state,
          isLoading:false,
          isAuth:true
        }
  
      case REG_ADM_N:
        return{
          ...state,
          isLoading:false,
          error:true
      }
  
      case LOGIN_ADM_REQ:
        return{
          ...state,
          isLoading:true
        }
  
      case LOGIN_ADM_Y:
        return{
          ...state,
          isLoading:false,
          isAuth:true
        }
  
      case LOGIN_ADM_N:
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