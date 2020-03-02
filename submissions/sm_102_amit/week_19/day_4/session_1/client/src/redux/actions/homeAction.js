import {
  FETCH_ALL_BOOK_REQUEST,
  FETCH_ALL_BOOK_SUCCESS,
  FETCH_ALL_BOOK_FAILURE
} from "../actionType";
import Axios from "axios";

const config = {
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json"
  }
};

export const fetchAllBooks = data => {
  return async dispatch => {
    console.log(data);
    dispatch({
      type: FETCH_ALL_BOOK_REQUEST
    });
    try {
      const res = await Axios.post("/search", { ...data }, config);
      console.log(res);
      dispatch({
        type: FETCH_ALL_BOOK_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: FETCH_ALL_BOOK_FAILURE,
        payload: err
      });
    }
  };
};
