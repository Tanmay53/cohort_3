import { ADD_LOCATION, LOAD_LOCATION } from "../actionType";

const initialState = {
  locations: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_LOCATION:
      return {
        ...state
      };
    case LOAD_LOCATION:
      return {
        ...state,
        locations: payload ? [...payload] : []
      };
    default:
      return {
        ...state
      };
  }
};
