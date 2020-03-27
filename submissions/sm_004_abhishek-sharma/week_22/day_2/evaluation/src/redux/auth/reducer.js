import { ADMIN_LOGIN, ADMIN_REGISTER, ADMIN_SIGNOUT } from "./actionTypes";

const initialState = {
  isLoggedIn: false,
  isSignedUp: false,
  userToken: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_REGISTER:
      if (action.payload) {
        return { ...state, isSignedUp: !state.isSignedUp };
      }
      return state;

    case ADMIN_LOGIN:
      if (action.payload.status) {
        return { ...state, isLoggedIn: true, userToken: action.payload.token };
      }
      return state;

    case ADMIN_SIGNOUT:
      return { ...state, isLoggedIn: false, userToken: "" };

    default:
      return state;
  }
};

export default reducer;