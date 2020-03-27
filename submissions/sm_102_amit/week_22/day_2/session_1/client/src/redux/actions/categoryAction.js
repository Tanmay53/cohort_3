import {
  FETCH_CATEGORY_LIST_REQUEST,
  FETCH_CATEGORY_LIST_SUCCESS,
  FETCH_CATEGORY_LIST_FAILURE,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE
} from "../actionType";
import Axios from "axios";

const config = {
  baseURL: "http://127.0.0.1:5000",
  headers: {
    "Content-Type": "application/json"
  }
};
export const fetchCategoryList = () => {
  return async dispatch => {
    dispatch({
      type: FETCH_CATEGORY_LIST_REQUEST
    });
    try {
      const res = await Axios.get("/category/list", config);
      console.log(res);
      dispatch({
        type: FETCH_CATEGORY_LIST_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FETCH_CATEGORY_LIST_FAILURE,
        payload: err
      });
    }
  };
};

export const addNewCategory = data => {
  return async dispatch => {
    dispatch({
      type: ADD_CATEGORY_REQUEST
    });
    try {
      const res = await Axios.post("/category/add", { ...data }, config);
      dispatch({
        type: ADD_CATEGORY_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ADD_CATEGORY_FAILURE,
        payload: err
      });
    }
  };
};
