import axios from 'axios'
import {
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    FILTER_PRODUCT_REQUEST,
    FILTER_PRODUCT_SUCCESS,
    FILTER_PRODUCT_FAILURE,
    SORT_PRODUCT_REQUEST,
    SORT_PRODUCT_SUCCESS,
    SORT_PRODUCT_FAILURE,
  } from "./type";

// ADD PRODUST ACTION
export const addProductRequest = (payload) => ({
    type: ADD_PRODUCT_REQUEST,
    payload: payload
})

export const addProductSuccess = (payload) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: payload
})

export const addProductFailure = (error) => ({
    type: ADD_PRODUCT_FAILURE,
    error: error
})


export const addProduct = (url, payload) => {
    return dispatch => {
        dispatch(addProductRequest());
        return axios
          .post(url, {...payload})
          .then(res => {
            alert(res.data.message)
            dispatch(addProductSuccess(res.data.message));
          })
          .catch((err) => dispatch(addProductFailure(err)));
    };
}


// GET PRODUST ACTION
export const getProductRequest = (payload) => ({
  type: GET_PRODUCT_REQUEST,
  payload: payload
})

export const getProductSuccess = (payload) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: payload
})

export const getProductFailure = (error) => ({
  type: GET_PRODUCT_FAILURE,
  error: error
})


export const getProduct = (url) => {
  return dispatch => {
      dispatch(getProductRequest());
      return axios
        .get(url)
        .then(res => {
          // console.log(res.data.products)
          dispatch(getProductSuccess(res.data));
        })
        .catch((err) => dispatch(getProductFailure(err)));
  };
}


// FILTER PRODUCT
export const filterProductRequest = (payload) => ({
  type: FILTER_PRODUCT_REQUEST,
  payload: payload
})

export const filterProductSuccess = (payload) => ({
  type: FILTER_PRODUCT_SUCCESS,
  payload: payload
})

export const filterProductFailure = (error) => ({
  type: FILTER_PRODUCT_FAILURE,
  error: error
})


export const filterProduct = (url) => {
  return dispatch => {
      dispatch(filterProductRequest());
      return axios
        .get(url)
        .then(res => {
          // console.log(res.data.products)
          dispatch(filterProductSuccess(res.data));
        })
        .catch((err) => dispatch(filterProductFailure(err)));
  };
}

// SORT PRODUCT 
export const sortProductRequest = (payload) => ({
  type: SORT_PRODUCT_REQUEST,
  payload: payload
})

export const sortProductSuccess = (payload) => ({
  type: SORT_PRODUCT_SUCCESS,
  payload: payload
})

export const sortProductFailure = (error) => ({
  type: SORT_PRODUCT_FAILURE,
  error: error
})


export const sortPrice = (url) => {
  return dispatch => {
      dispatch(sortProductRequest());
      return axios
        .get(url)
        .then(res => {
          // console.log(res.data)
          dispatch(sortProductSuccess(res.data));
        })
        .catch((err) => dispatch(sortProductFailure(err)));
  };
}
