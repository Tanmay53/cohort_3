import {
  REGISTRATION_START,
  REGISTRATION_FAILS,
  REGISTRATION_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILS,
  AUTH_FAILS,
  AUTH_START,
  AUTH_SUCCESS,
  USER_FAILS,
  USER_START,
  USER_SUCCESS,
  ADD_FOLLOWER,
  LOGOUT
} from "../actionType";
import axios from "axios";

export const register = payload => async dispatch => {
  dispatch({
    type: REGISTRATION_START
  });

  try {
    let response = await axios.post(
      "http://localhost:5000/auth/register",
      payload,
      {
        "Content-Type": "application/json"
      }
    );
    console.log(response);
    if (response.data.error) {
      throw new Error("User Already Exist");
    } else {
      dispatch({
        type: REGISTRATION_SUCCESS
      });
    }
  } catch (error) {
    dispatch({
      type: REGISTRATION_FAILS,
      payload: error.message
    });
  }
};

export const login = payload => async dispatch => {
  dispatch({
    type: LOGIN_START
  });

  try {
    let response = await axios.post(
      "http://localhost:5000/auth/login",
      payload,
      {
        "Content-Type": "application/json"
      }
    );
    console.log(response);
    if (response.data.error) {
      throw new Error(response.data.message);
    } else {
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: LOGIN_SUCCESS
      });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAILS,
      payload: error.message
    });
  }
};

export const getUser = payload => async dispatch => {
  dispatch({
    type: AUTH_START
  });

  console.log(payload);
  try {
    let response = await axios.get("http://localhost:5000/auth/getuser", {
      headers: {
        Authorization: `Bearer ${payload}`
      }
    });
    console.log(response);
    if (response.data.error) {
      throw new Error(response.data.message);
    } else {
      localStorage.setItem("twiuser", JSON.stringify(response.data.user));
      dispatch({
        type: AUTH_SUCCESS
      });
    }
  } catch (error) {
    dispatch({
      type: AUTH_FAILS,
      payload: error.message
    });
  }
};

export const logout = () => ({
  type: LOGOUT
});
