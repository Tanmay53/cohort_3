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
      if (res.data.error) {
        throw res.data.message;
      }
      setTimeout(() => {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data
        });
      }, 1000);
    } catch (err) {
      let error = err.message ? err.message : err;
      dispatch({
        type: SIGNUP_FAILURE,
        payload: error
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
      if (res.data.error) {
        throw res.data.message;
      }
      setTimeout(() => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });
      }, 1000);
    } catch (err) {
      let error = err.message ? err.message : err;
      dispatch({
        type: LOGIN_FAILURE,
        payload: error
      });
    }
  };
};

export const userAuth = data => {
  return async dispatch => {
    dispatch({
      type: AUTH_REQUEST
    });
    try {
      const res = await Axios.post("/auth/user", { ...data }, config);
      if (res.data.error) {
        throw res.data.message;
      }
      localStorage.setItem(
        "loggedIn",
        JSON.stringify({ token: res.data.token, isLoggedIn: true })
      );
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      let error = err.message ? err.message : err;
      dispatch({
        type: AUTH_FAILURE,
        payload: error
      });
    }
  };
};
