import axios from "axios";
export const FETCH_RES_FAILURE = "FETCH_RES_FAILURE";
export const FETCH_RES_SUCCESS = "FETCH_RES_SUCCESS";
export const FETCH_REQUEST = "FETCH_REQUEST";

export const fetchRequest = isLoading => {
  return {
    type: FETCH_REQUEST,
    isLoading: isLoading
  };
};
export const fetchSuccess = data => {
  return {
    type: FETCH_RES_SUCCESS,
    data: data
  };
};
export const fetchFailure = err => {
  return {
    type: FETCH_RES_FAILURE,
    error: err
  };
};

// AsyncResource function
const fetchPostRequest = (
  url,
  method,
  data = {},
  headers = { "Content-Type": "application/json" }
) => {
  const config = {
    baseURL: "http://localhost:8080",
    url: url,
    method: method,
    headers: headers,
    data: data
  };
  return dispatch => {
    dispatch(fetchRequest);
    return axios(config)
      .then(res => {
        console.log("response success", res.data);
        return new Promise(dispatch(fetchSuccess(res.data)));
      })
      .catch(err => {
        console.log("error status", err.message);
        return dispatch(fetchFailure(err.message));
      });
  };
};

export default fetchPostRequest;
