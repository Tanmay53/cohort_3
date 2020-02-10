import { ADD_USER } from "./actionType";
import { act } from "react-dom/test-utils";
import { DEL_USER } from "./actionType";

const initialState = {
  user: []
};

const userDispatcher = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_USER:
      return {
        user: [...state.user, action.payload]
      };
    case DEL_USER: {
      let targetUser = action.payload;
      let newState = state.user.filter(item => {
        return item.name !== targetUser;
      });
      return {
        user: newState
      };
    }
    default:
      return state;
  }
};

export default userDispatcher;
