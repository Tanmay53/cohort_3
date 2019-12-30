import { FETCH_RES_FAILURE, FETCH_RES_SUCCESS, FETCH_REQUEST } from "./Action";

const initialState = {
  isLoading: false,
  data: {},
  error: "",
  token: "",
  message: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_RES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };
    case FETCH_RES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
