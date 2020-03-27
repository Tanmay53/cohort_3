import {
  FETCH_PRODUCT_LIST_REQUEST,
  FETCH_PRODUCT_LIST_SUCCESS,
  FETCH_PRODUCT_LIST_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  FILTER_PRODUCT_REQUEST,
  FILTER_PRODUCT_SUCCESS,
  FILTER_PRODUCT_FAILURE,
  SORT_PRODUCT
} from "../actionType";

let initialState = {
  isLoading: false,
  error: "",
  message: "",
  total: "",
  productList: [],
  filteredList: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST_REQUEST: {
      return {
        ...state
      };
    }
    case FETCH_PRODUCT_LIST_SUCCESS: {
      return {
        ...state,
        total: action.payload.total.total,
        productList: [...action.payload.result]
      };
    }
    case FETCH_PRODUCT_LIST_FAILURE: {
      return {
        ...state
      };
    }
    case ADD_PRODUCT_REQUEST: {
      return {
        ...state
      };
    }
    case ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message
      };
    }
    case ADD_PRODUCT_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message
      };
    }
    case FILTER_PRODUCT_REQUEST: {
      return {
        ...state
      };
    }
    case FILTER_PRODUCT_SUCCESS: {
      return {
        ...state,
        productList: [...action.payload.result]
      };
    }
    case FILTER_PRODUCT_FAILURE: {
      return {
        ...state
      };
    }
    case SORT_PRODUCT: {
      let temp;
      if (action.payload === "asc") {
        temp = state.productList.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
      } else {
        temp = state.productList.sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
      }
      return {
        ...state,
        productList: [...temp]
      };
    }
    default:
      return state;
  }
};
