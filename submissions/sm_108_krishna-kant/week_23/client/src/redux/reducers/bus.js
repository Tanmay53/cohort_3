import { ADD_BUS, LIST_BUS } from "../actionType";

const initialState = {
  buses: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_BUS:
      return {
        ...state
      };
    case LIST_BUS:
      return {
        ...state,
        buses: payload
      };
    default:
      return {
        ...state
      };
  }
};
