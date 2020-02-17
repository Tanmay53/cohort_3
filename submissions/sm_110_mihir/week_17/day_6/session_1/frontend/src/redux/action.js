import axios from "axios";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const TOGGLE_LOGIN = "TOGGLE_LOGIN";
export const RESET = "RESET";

export const reset = () => {
  return {
    type: RESET
  };
};
export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST
  };
};

export const fetchSuccess = data => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  };
};

export const fetchFailure = data => {
  return {
    type: FETCH_FAILURE,
    payload: data
  };
};

export const toggleLogin = () => {
  return {
    type: TOGGLE_LOGIN
  };
};

export const fetchData = config => {
  return async dispatch => {
    dispatch(fetchRequest);
    return await axios(config)
      .then(res => dispatch(fetchSuccess(res)))
      .catch(error => dispatch(fetchFailure(error)));
  };
};
