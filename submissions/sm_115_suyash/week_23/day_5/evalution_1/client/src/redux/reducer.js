import {
  AXIOS_REQUEST,
  SIGN_UP_SUCCESSFULLY,
  SIGN_UP_FAIL,
  SIGN_IN_SUCCESSFULLY,
  SIGN_IN_FAIL
} from "./loginAction";
import {
  FETCH_FOLLOWING_TWEETS_SUCCESS,
  FETCH_FOLLOWING_TWEETS_FAIL,
  ADD_NEW_TWEET_SUCCESS,
  ADD_NEW_TWEET_FAIL,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAIL,
  FOLLOW_NEW_USER_SUCCESS,
  FOLLOW_NEW_USER_FAIL
} from "./action";

const initialState = {
  axiosLoding: false,
  signInMsg: "",
  signUpMsg: "",
  isAuth: false,
  user: {},
  token: "",
  followingData: [],
  allUsers: [],
  prv: 0,
  nxt: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AXIOS_REQUEST:
      return {
        ...state,
        axiosLoding: true
      };
    case SIGN_UP_SUCCESSFULLY:
      alert(action.payload.message);
      return {
        ...state,
        axiosLoding: false,
        signUpMsg: action.payload.message
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        axiosLoding: false,
        signUpMsg: action.payload.message
      };
    case SIGN_IN_SUCCESSFULLY:
      alert(action.payload.message);
      return {
        ...state,
        axiosLoding: false,
        signInMsg: action.payload.message,
        token: action.payload.token,
        user: action.payload.user
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        axiosLoding: false,
        signInMsg: action.payload.message
      };
    case FETCH_FOLLOWING_TWEETS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        followingData: action.payload.data,
        nxt: action.payload.nxt,
        prv: action.payload.prv,
        axiosLoding: false
      };
    case FETCH_FOLLOWING_TWEETS_FAIL:
      return {
        ...state,
        axiosLoding: false
      };
    case ADD_NEW_TWEET_SUCCESS:
      alert(action.payload);
      return {
        ...state,
        axiosLoding: false
      };
    case ADD_NEW_TWEET_FAIL:
      alert(action.payload);
      return {
        ...state,
        axiosLoding: false
      };
    case FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        axiosLoding: false,
        allUsers: action.payload
      };
    case FETCH_ALL_USERS_FAIL:
      return {
        ...state,
        axiosLoding: false
      };
    case FOLLOW_NEW_USER_SUCCESS:
      return {
        ...state,
        axiosLoding: false
      };
    case FOLLOW_NEW_USER_FAIL:
      return {
        ...state,
        axiosLoding: false
      };
    default:
      return {
        state
      };
  }
};

export default reducer;
