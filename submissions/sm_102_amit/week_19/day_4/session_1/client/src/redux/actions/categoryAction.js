import {
  FETCH_ALL_CATEGORY_REQUEST,
  FETCH_ALL_CATEGORY_SUCCESS,
  FETCH_ALL_CATEGORY_FAILURE
} from "../actionType";
import Axios from "axios";

const config = {
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json"
  }
};

export const fetchAllCategory = () => {
  return async dispatch => {
    dispatch({
      type: FETCH_ALL_CATEGORY_REQUEST
    });
    try {
      const res = await Axios.get("/category/list", config);
      dispatch({
        type: FETCH_ALL_CATEGORY_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FETCH_ALL_CATEGORY_FAILURE,
        payload: err
      });
    }
  };
};
