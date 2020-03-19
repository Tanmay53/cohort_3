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
import Axios from "axios";

const config = {
  baseURL: "http://127.0.0.1:5000",
  headers: {
    "Content-Type": "application/json"
  }
};

export const fetchProductList = () => {
  return async dispatch => {
    dispatch({
      type: FETCH_PRODUCT_LIST_REQUEST
    });
    try {
      const res = await Axios.get("/product/list", config);
      console.log(res);
      dispatch({
        type: FETCH_PRODUCT_LIST_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: FETCH_PRODUCT_LIST_FAILURE,
        payload: err
      });
    }
  };
};

export const addNewProduct = data => {
  return async dispatch => {
    dispatch({
      type: ADD_PRODUCT_REQUEST
    });
    try {
      const res = await Axios.post("/product/add", { ...data }, config);
      console.log(res);
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ADD_PRODUCT_FAILURE,
        payload: err
      });
    }
  };
};

export const filterProduct = data => {
  return async dispatch => {
    dispatch({
      type: FILTER_PRODUCT_REQUEST
    });
    try {
      const res = await Axios.get("/product/filter/" + data, config);
      console.log(res);
      dispatch({
        type: FILTER_PRODUCT_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: FILTER_PRODUCT_FAILURE,
        payload: err
      });
    }
  };
};

export const sortProduct = data => {
  return {
    type: SORT_PRODUCT,
    payload: data
  };
};
