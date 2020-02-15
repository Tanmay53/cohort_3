import { AXIOS_LODING, SIGN_UP_SUCCESS, LOGIN_SUCCESS } from "./action";

const initialState = {
  loginMsg: "",
  signUpMsg: "",
  isAuth: false,
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
      if (action.payload == "signup successfully") {
        return {
          ...state,
          loading: false,
          signUpMsg: action.payload
        };
      } else {
        return {
          ...state,
          loading: false,
          signUpMsg: action.payload
        };
      }
    case LOGIN_SUCCESS:
      console.log(state.loading);
      if (action.payload == "Login successfully") {
        return {
          ...state,
          loading: false,
          isAuth: true,
          loginMsg: action.payload
        };
      } else {
        return {
          ...state,
          loading: false,
          loginMsg: action.payload
        };
      }
    default:
      return state;
  }
};

export default reducer;
