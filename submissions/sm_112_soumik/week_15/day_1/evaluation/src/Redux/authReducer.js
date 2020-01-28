import { LOGIN } from "./actionType";

const initialState = {
  user: "admin",
  pass: "admin",
  isLoggedIn: false
};

const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN: {
      if (
        action.payload.user === state.user &&
        action.payload.pass === state.pass
      ) {
        return {
          ...state,
          isLoggedIn: true
        };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};
export default authReducer;
