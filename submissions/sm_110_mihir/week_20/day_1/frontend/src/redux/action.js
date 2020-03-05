import axios from "axios";
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

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

export const fetchData = config => {
  return async dispatch => {
    dispatch(fetchRequest);
    return await axios(config)
      .then(res => dispatch(fetchSuccess(res)))
      .catch(err => dispatch(fetchFailure(err)));
  };
};
