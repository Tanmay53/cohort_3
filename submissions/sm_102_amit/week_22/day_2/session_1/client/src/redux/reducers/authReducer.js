import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE
} from "../actionType";

let initialState = {
  isLoading: false,
  isLoggedIn: false,
  uid: null,
  username: null,
  usertype: null,
  token: null,
  error: false,
  message: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST: {
      return {
        ...state
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        error: false,
        message: action.payload.message
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        error: true,
        message: action.payload
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        error: false,
        message: action.payload.message,
        token: action.payload.token
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        error: true,
        message: action.payload
      };
    }
    case AUTH_REQUEST: {
      return {
        ...state
      };
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        error: false,
        isLoggedIn: true,
        uid: action.payload.uid,
        username: action.payload.username,
        usertype: action.payload.usertype
      };
    }
    default:
      return state;
  }
};
