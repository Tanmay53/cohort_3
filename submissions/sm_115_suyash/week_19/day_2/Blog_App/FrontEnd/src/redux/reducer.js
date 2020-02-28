import {
  AXIOS_LODING,
  SIGN_UP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT
} from "./loginAction";
import { FETCT_DATA_ALL_BLOG_SUCCESS } from "./action";

const initialState = {
  loginMsg: "",
  signUpMsg: "",
  isAuth: false,
  authData: {},
  allBlogData: [],
  signupAuth: false,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AXIOS_LODING:
      return {
        ...state,
        loading: true
      };
    case SIGN_UP_SUCCESS:
      console.log(state.loading);
      if (action.payload.error == false) {
        return {
          ...state,
          loading: false,
          signupAuth: true,
          signUpMsg: action.payload
        };
      } else {
        return {
          ...state,
          loading: false,
          signUpMsg: action.payload.message
        };
      }
    case LOGIN_SUCCESS:
      console.log(state.loading);
      if (action.payload.error == false) {
        return {
          ...state,
          loading: false,
          isAuth: true,
          authData: action.payload.data,
          loginMsg: action.payload.message
        };
      } else {
        return {
          ...state,
          loading: false,
          loginMsg: action.payload
        };
      }
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        signupAuth: false
      };
    case FETCT_DATA_ALL_BLOG_SUCCESS:
      console.log(action.payload, "<----All Blog data");
      return {
        ...state,
        loading: false,
        allBlogData: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
