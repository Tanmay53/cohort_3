import { ADD_CUSTOMER } from "./actionType";

let initialState = {
  customer: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER: {
      state.customer.push(action.payload);
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default reducer;
