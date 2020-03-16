import {
  FETCH_ALL_CATEGORY_REQUEST,
  FETCH_ALL_CATEGORY_SUCCESS,
  FETCH_ALL_CATEGORY_FAILURE
} from "../actionType";

let initialState = {
  isLoading: true,
  error: false,
  allCategoryList: []
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORY_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_ALL_CATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        allCategoryList: [...action.payload.result]
      };
    }
    case FETCH_ALL_CATEGORY_FAILURE: {
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
