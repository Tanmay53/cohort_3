/** @format */

import {
  LOGIN_ADMIN_REQUEST,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_FAILURE,
  REGISTER_ADMIN_REQUEST,
  REGISTER_ADMIN_SUCCESS,
  REGISTER_ADMIN_FAILURE,
  LOGOUT_ADMIN
} from "../actionTypes";

const initialState = {
  isAuth: false,
  isLoading: true,
  error: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case LOGIN_ADMIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isAuth: true
      };
    case LOGIN_ADMIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    case REGISTER_ADMIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case REGISTER_ADMIN_SUCCESS:
      if (!action.payload.error) {
        return {
          ...state,
          isLoading: false,
          isAuth: true
        };
      } else {
        return {
          ...state,
          isLoading: false,
          isAuth: false
        };
      }

    case REGISTER_ADMIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    case LOGOUT_ADMIN:
      return {
        ...state,
        isAuth: false
      };

    default:
      return state;
  }
};

export default authReducer;
