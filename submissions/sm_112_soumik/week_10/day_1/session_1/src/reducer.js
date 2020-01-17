import { act } from "react-dom/test-utils";

const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";

const initialState = {
  count: 0
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        count: state.count + action.amount
      };
    case DECREMENT_COUNT:
      return {
        count: state.count - action.amount
      };
    default:
      return state;
  }
};

export default Reducer;
