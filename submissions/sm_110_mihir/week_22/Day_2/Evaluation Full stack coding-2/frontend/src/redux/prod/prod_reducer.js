import {
  PROD_FETCH_REQUEST,
  PROD_FETCH_SUCCESS,
  PROD_FETCH_FAILURE,
  PROD_RESET,
  CAT_FETCH_SUCCESS,
  ADD_PRODUCT
} from "./prod_action";

const initialState = {
  isLoading: false,
  data: {},
  status: null
};

export const prod_reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROD_RESET:
      return {
        ...state,
        ...initialState
      };
    case PROD_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case PROD_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        status: action.payload.status
      };
    case PROD_FETCH_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        status: action.payload.status
      };
    case CAT_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload.data,
        status: action.payload.status
      };
    case ADD_PRODUCT:
      return {
        ...state,
        isLoading: false,
        msg: action.payload.data,
        status: action.payload.status
      };
    default:
      return state;
  }
};

export default prod_reducer;
