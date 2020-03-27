import {
    LOGIN_ADMIN_REQUEST,
    LOGIN_ADMIN_SUCCESS,
    LOGIN_ADMIN_FAILURE,
    LOGOUT_ADMIN_REQUEST,
    REG_ADMIN_REQUEST,
    REG_ADMIN_SUCCESS,
    REG_ADMIN_FAILURE
  } from "./types";
  
  const initState = {
    isAuth: false,
    isLoading: true,
    error: false,
    message: '',
    token: ''
  };
  
  const authReducer = (state = initState, action) => {
    switch (action.type) {
      // register
      case REG_ADMIN_REQUEST:
        return {
          isLoading: true,
          error: false
        }

      case REG_ADMIN_SUCCESS:
        return {
          isLoading: false,
          message: action.payload.message
        }

      case REG_ADMIN_FAILURE:
        return {
          isLoading: false,
          error: true
        }

      // login
      case LOGIN_ADMIN_REQUEST:
        return {
          isLoading: true,
          error: false
        };

      case LOGIN_ADMIN_SUCCESS:
        if (!action.payload.error) {
          return {
            isLoading: false,
            isAuth: true,
            message: action.payload.message,
            token: action.payload.token
          }
        }
        // return {
        //   isLoading: false,
        //   isAuth: true,
        //   message: action.payload.message
        // };
      case LOGIN_ADMIN_FAILURE:
        return {
          isLoading: false,
          error: true
        };

      // logout
      case LOGOUT_ADMIN_REQUEST:
        return {
          error: false,
          isAuth: false,
          message: ''
        };

      default:
        return state;
    }
  };
  
  export default authReducer;