import { ADD_BUS } from "../actionType";

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
    default:
      return {
        ...state
      };
  }
};
