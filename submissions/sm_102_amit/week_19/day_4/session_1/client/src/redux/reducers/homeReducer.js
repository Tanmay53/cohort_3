import {
  FETCH_ALL_BOOK_REQUEST,
  FETCH_ALL_BOOK_SUCCESS,
  FETCH_ALL_BOOK_FAILURE
} from "../actionType";

let initialState = {
  isLoading: true,
  error: false,
  allBookList: []
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_BOOK_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_ALL_BOOK_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        allBookList: [...action.payload.result]
      };
    }
    case FETCH_ALL_BOOK_FAILURE: {
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
