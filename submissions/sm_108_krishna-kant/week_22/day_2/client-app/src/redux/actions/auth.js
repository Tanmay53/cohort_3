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

export const getUnfollowedMember = payload => async dispatch => {
  console.log("Called");
  dispatch({
    type: USER_START
  });

  try {
    let response = await axios.get(
      `http://localhost:5000/auth/lists/${payload}`
    );
    dispatch({
      type: USER_SUCCESS,
      payload: response.data.data
    });
  } catch (error) {
    dispatch({
      type: USER_FAILS,
      payload: error.message
    });
  }
};

export const addFollower = payload => async dispatch => {
  try {
    const { id, userid } = payload;
    let response = await axios.get(
      `http://localhost:5000/auth/follow/${userid}/${id}`
    );
    console.log(response);
    dispatch(getUnfollowedMember(userid));
    dispatch({
      type: ADD_FOLLOWER
    });
  } catch (error) {}
};

export const logout = () => ({
  type: LOGOUT
});
