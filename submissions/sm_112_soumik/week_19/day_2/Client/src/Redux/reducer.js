import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGGED_OUT,
  LOGGED_IN
} from "./actionType";

const initialState = {
  auth: false,
  login: "",
  register: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      let cond = false;
      if (action.payload.status == "login succesfull") {
        cond = true;
      }
      return {
        ...state,
        login: action.payload,
        auth: cond
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        register: action.payload
      };
    }
    case LOGGED_OUT: {
      return {
        ...state,
        auth: false,
        token: ""
      };
    }
    case LOGGED_IN: {
      return {
        ...state,
        auth: true,
        token: ""
      };
    }
    default:
      return state;
  }
};

export default reducer;
