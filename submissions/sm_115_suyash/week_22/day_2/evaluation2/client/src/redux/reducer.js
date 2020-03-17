import {
  AXIOS_REQUEST,
  SIGN_UP_SUCCESSFULLY,
  SIGN_UP_FAIL,
  SIGN_IN_SUCCESSFULLY,
  SIGN_IN_FAIL
} from "./loginAction";
import {
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_FAIL,
  FETCH_ARTIST_NAME_SUCCESS,
  FETCH_ARTIST_NAME_FAIL
} from "./action";

const initialState = {
  axiosLoding: false,
  signUpMsg: "",
  signInMsg: "",
  isAuth: false,
  token: "",
  user: {},
  data: [],
  artistData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AXIOS_REQUEST:
      return {
        ...state,
        axiosLoding: true
      };
    case SIGN_UP_SUCCESSFULLY:
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
    case FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        axiosLoding: false
      };
    case FETCH_ARTIST_FAIL:
      return {
        axiosLoding: false
      };
    case FETCH_ARTIST_NAME_SUCCESS:
      return {
        artistData: action.payload,
        axiosLoding: false
      };
    case FETCH_ARTIST_NAME_FAIL:
      return {
        axiosLoding: false
      };
    default:
      return {
        state
      };
  }
};

export default reducer;
