import { ADD, SUB } from "./action";

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        count: state.count + 1
      };

    case SUB:
      return {
        ...state,
        count: state.count - 1
      };

    case "ADDITION":
      return {
        ...state,
        count: state.count + action.val
      };
    case "SUBTRATION":
      return {
        ...state,
        count: state.count - action.val
      };
    case "MULTIPLY":
      return {
        ...state,
        count: state.count * action.val
      };
    case "DIVIDE":
      return {
        ...state,
        count: state.count / action.val
      };
    case "REMINDER":
      return {
        ...state,
        count: state.count % action.val
      };
    case "EVEN/ODD":
      if (action.val % 2 == 0) {
        return {
          ...state,
          count: state.count + 2
        };
      } else {
        return {
          ...state,
          count: state.count + 1
        };
      }
    default:
      return state;
  }
};

export default reducer;
