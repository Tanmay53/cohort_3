import {
  FETCH_ALL_AUTHOR_REQUEST,
  FETCH_ALL_AUTHOR_SUCCESS,
  FETCH_ALL_AUTHOR_FAILURE
} from "../actionType";

let initialState = {
  isLoading: true,
  error: false,
  allAuthorList: []
};

export const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_AUTHOR_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_ALL_AUTHOR_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        allAuthorList: [...action.payload.result]
      };
    }
    case FETCH_ALL_AUTHOR_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: true
      };
    }
    default:
      return state;
  }
};
