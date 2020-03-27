import { USER_REGISTER, USER_LOGIN, USER_LOGOUT } from "./actionTypes";

const initialState = {
  isLoggedIn: false,
  isSignedUp: false,
  userToken: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      if (action.payload) {
        return { ...state, isSignedUp: action.payload };
      }
      return state;

    case USER_LOGIN:
      if (action.payload.status) {
        return { ...state, isLoggedIn: true, userToken: action.payload.token };
      }
      return state;

    case USER_LOGOUT:
      return { ...state, isLoggedIn: false, userToken: "" };

    default:
      return state;
  }
};

export default reducer;