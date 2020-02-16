import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "./actionType";

const initialState = {
  auth: false,
  login: "",
  register: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        login: action.payload
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        register: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
