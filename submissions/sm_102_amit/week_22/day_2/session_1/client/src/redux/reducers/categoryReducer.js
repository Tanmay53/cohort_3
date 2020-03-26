import {
  FETCH_CATEGORY_LIST_REQUEST,
  FETCH_CATEGORY_LIST_SUCCESS,
  FETCH_CATEGORY_LIST_FAILURE,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE
} from "../actionType";

let initialState = {
  isLoading: false,
  categoryList: []
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_LIST_REQUEST: {
      return {
        ...state
      };
    }
    case FETCH_CATEGORY_LIST_SUCCESS: {
      return {
        ...state,
        categoryList: [...action.payload.result]
      };
    }
    case ADD_CATEGORY_REQUEST: {
      return {
        ...state
      };
    }
    case ADD_CATEGORY_SUCCESS: {
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message
      };
    }
    case ADD_CATEGORY_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message
      };
    }
    default:
      return state;
  }
};
