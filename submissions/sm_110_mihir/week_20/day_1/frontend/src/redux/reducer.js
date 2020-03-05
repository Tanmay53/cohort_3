import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./action";

const initialState = {
  isLoading: false,
  data: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        error: false,
        status: action.payload.status
      };
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: true,
        status: action.payload.status
      };
    }
    default:
      return state;
  }
};

export default reducer;
