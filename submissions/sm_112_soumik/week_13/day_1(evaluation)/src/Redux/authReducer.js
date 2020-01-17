import { IS_AUTH } from "./actionType";
const initialState = {
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case IS_AUTH:
      if (action.payload.name == "admin" && action.payload.pass == "admin") {
        return {
          ...state,
          isAuth: true
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default authReducer;
