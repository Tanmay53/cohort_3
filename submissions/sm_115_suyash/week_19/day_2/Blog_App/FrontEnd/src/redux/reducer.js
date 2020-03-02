import {
  AXIOS_LODING,
  SIGN_UP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT
} from "./loginAction";
import {
  FETCT_DATA_ALL_BLOG_SUCCESS,
  FETCT_DATA_MY_BLOG_SUCCESS,
  SHOW_COMMENTS_SUCCESS,
  CREATE_NEW_BLOG_SUCCESS,
  CREATE_NEW_COMMENT_SUCCESS
} from "./action";

const initialState = {
  loginMsg: "",
  signUpMsg: "",
  isAuth: false,
  authData: {},
  allBlogData: [],
  myBlogData: [],
  allComments: [],
  signupAuth: false,
  loading: false,
  blogSuccess:""
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
          signUpMsg: action.payload.message
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
      if (action.payload.error === false) {
        return {
          ...state,
          loading: false,
          allBlogData: action.payload.data
        };
      }
    case FETCT_DATA_MY_BLOG_SUCCESS:
      if (action.payload.error === false) {
        return {
          ...state,
          loading: false,
          myBlogData: action.payload.data
        };
      }
    case SHOW_COMMENTS_SUCCESS:
      console.log(action.payload);

      return {
        ...state,
        loading: false,
        allComments: action.payload
      };
    case CREATE_NEW_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        blogSuccess:action.payload.message
      };
    case CREATE_NEW_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
