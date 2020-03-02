import {
  FETCH_ALL_AUTHOR_REQUEST,
  FETCH_ALL_AUTHOR_SUCCESS,
  FETCH_ALL_AUTHOR_FAILURE
} from "../actionType";
import Axios from "axios";

const config = {
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json"
  }
};

export const fetchAllAuthor = () => {
  return async dispatch => {
    dispatch({
      type: FETCH_ALL_AUTHOR_REQUEST
    });
    try {
      const res = await Axios.get("/author/list", config);
      dispatch({
        type: FETCH_ALL_AUTHOR_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FETCH_ALL_AUTHOR_FAILURE,
        payload: err
      });
    }
  };
};
