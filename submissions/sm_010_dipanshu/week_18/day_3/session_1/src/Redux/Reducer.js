const SIGNUP = "signup";
const LOGIN = "login";
const LOGOUT = "logout";

const initialState = {
  signupError: false,
  isLoggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, signupError: action.payload };

    case LOGIN:
      return { ...state, isLoggedIn: action.payload };

    case LOGOUT:
      return { ...state, isLoggedIn: false };

    default:
      return state;
  }
};

export default reducer;
