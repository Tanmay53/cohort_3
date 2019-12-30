import { ADD_CUSTOMER } from "./actionType";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return [...state, action.payload];
  }
};

export default reducer;
