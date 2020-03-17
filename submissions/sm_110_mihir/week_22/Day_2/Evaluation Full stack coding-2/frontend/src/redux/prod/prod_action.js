import axios from "axios";

export const PROD_FETCH_REQUEST = "PROD_FETCH_REQUEST";
export const PROD_FETCH_SUCCESS = "PROD_FETCH_SUCCESS";
export const PROD_FETCH_FAILURE = "PROD_FETCH_FAILURE";
export const PROD_RESET = "PROD_RESET";
export const CAT_FETCH_SUCCESS = "CAT_FETCH_SUCCESS";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const prodReset = () => {
  return {
    type: PROD_RESET
  };
};
export const fetchProdRequest = () => {
  return {
    type: PROD_FETCH_REQUEST
  };
};

export const fetchProdSuccess = data => {
  return {
    type: PROD_FETCH_SUCCESS,
    payload: data
  };
};

export const fetchProdFailure = data => {
  return {
    type: PROD_FETCH_FAILURE,
    payload: data
  };
};
export const fetchCatSuccess = data => {
  return {
    type: CAT_FETCH_SUCCESS,
    payload: data
  };
};

export const addProduct = data => {
  return {
    type: ADD_PRODUCT,
    payload: data
  };
};
export const fetchProdData = config => {
  return async dispatch => {
    dispatch(fetchProdRequest);
    return await axios(config)
      .then(res => dispatch(fetchProdSuccess(res)))
      .catch(error => dispatch(fetchProdFailure(error)));
  };
};

export const fetchCatData = config => {
  return async dispatch => {
    dispatch(fetchProdRequest);
    return await axios(config)
      .then(res => dispatch(fetchCatSuccess(res)))
      .catch(error => dispatch(fetchProdFailure(error)));
  };
};

export const postAddProduct = config => {
  return async dispatch => {
    dispatch(fetchProdRequest);
    return await axios(config)
      .then(res => dispatch(addProduct(res)))
      .catch(error => dispatch(fetchProdFailure(error)));
  };
};
