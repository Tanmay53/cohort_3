import { ADD_BUS, LIST_BUS } from "../actionType";

const initialState = {
  buses: [],
  next: 0,
  previous: 0
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
        buses: payload.data,
        next: payload.next,
        previous: payload.prev
      };
    default:
      return {
        ...state
      };
  }
};
