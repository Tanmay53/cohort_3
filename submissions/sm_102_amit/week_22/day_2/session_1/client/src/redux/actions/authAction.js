import {
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE
} from "../actionType";
import Axios from "axios";

const config = {
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json"
  }
};

export const signUp = data => {
  return async dispatch => {
    dispatch({
      type: SIGNUP_REQUEST
    });
    try {
      const res = await Axios.post("/auth/signup", { ...data }, config);
      console.log(res);
      if (res.data.error) {
        throw res.data.message;
      }
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: SIGNUP_FAILURE,
        payload: err
      });
    }
  };
};

export const login = data => {
  return async dispatch => {
    dispatch({
      type: LOGIN_REQUEST
    });
    try {
      const res = await Axios.post("/auth/login", { ...data }, config);
      console.log(res);
      if (res.data.error) {
        throw res.data.message;
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err
      });
    }
  };
};

export const authentication = data => {
  return async dispatch => {
    dispatch({
      type: AUTH_REQUEST
    });
    try {
      console.log(data);
      config.headers.Authorization = `Bearer ${data}`;
      const res = await Axios.get("/auth/user", config);
      console.log(res);
      if (res.data.error) {
        throw res.data.message;
      }
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};
