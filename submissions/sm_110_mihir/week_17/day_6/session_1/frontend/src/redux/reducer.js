import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  TOGGLE_LOGIN,
  RESET
} from "./action";

const initialState = {
  isLoggedin: false,
  isLoading: false,
  data: {},
  status: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        ...initialState
      };
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        status: action.payload.status
      };
    case FETCH_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        status: action.payload
      };
    case TOGGLE_LOGIN:
      return {
        ...state,
        isLoggedin: true
      };
    default:
      return state;
  }
};

export default reducer;
