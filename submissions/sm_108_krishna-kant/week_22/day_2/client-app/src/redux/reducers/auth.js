import {
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILS,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILS,
  USER_FAILS,
  USER_START,
  USER_SUCCESS,
  LOGOUT
} from "../actionType";

const initialState = {
  loading: false,
  isError: false,
  isAuth: false,
  user: JSON.parse(localStorage.getItem("twiuser")),
  error: "",
  unfollowed: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_START:
      return {
        ...state,
        loading: true,
        isError: false,
        error: ""
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case REGISTRATION_FAILS:
      return {
        ...state,
        loading: false,
        isError: true,
        error: action.payload
      };
    case LOGIN_START:
      return {
        ...state,
        loading: true,
        isError: false,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true
      };
    case LOGIN_FAILS:
      return {
        ...state,
        loading: false,
        isError: true,
        error: action.payload
      };
    case AUTH_START:
      return {
        ...state,
        loading: true,
        isError: false,
        error: ""
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true
      };
    case AUTH_FAILS:
      return {
        ...state,
        loading: false
      };
    case USER_START:
      return {
        ...state,
        loading: true,
        isError: false,
        error: ""
      };
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        unfollowed: action.payload
      };
    case USER_FAILS:
      return {
        ...state,
        loading: false
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false
      };
    default:
      return state;
  }
};
