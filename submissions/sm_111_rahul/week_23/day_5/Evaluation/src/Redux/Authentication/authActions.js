/** @format */

import axios from "axios";
import {
  LOGIN_ADMIN_REQUEST,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_FAILURE,
  REGISTER_ADMIN_REQUEST,
  REGISTER_ADMIN_SUCCESS,
  REGISTER_ADMIN_FAILURE,
  LOGOUT_ADMIN
} from "../actionTypes";

export const adminLoginRequest = () => ({
  type: LOGIN_ADMIN_REQUEST
});

export const adminLoginSuccess = () => ({
  type: LOGIN_ADMIN_SUCCESS
});

export const adminLoginFailure = () => ({
  type: LOGIN_ADMIN_FAILURE
});

export const adminRegisterRequest = () => ({
  type: REGISTER_ADMIN_REQUEST
});

export const adminRegisterSuccess = () => ({
  type: REGISTER_ADMIN_SUCCESS
});

export const adminRegisterFailure = () => ({
  type: REGISTER_ADMIN_FAILURE
});

export const logoutAdmin = () => ({
  type: LOGOUT_ADMIN
});

export const loginAdmin = payload => {
  return dispatch => {
    dispatch(adminLoginRequest());
    return axios
      .post("http://localhost:8080/auth/login", {
        ...payload
      })
      .then(res => {
        dispatch(adminLoginSuccess(res.data));
      })
      .catch(() => {
        dispatch(adminLoginFailure());
      });
  };
};

export const registerAdmin = payload => {
  console.log(payload);
  return dispatch => {
    dispatch(adminRegisterRequest());
    return axios
      .post("http://localhost:8080/auth/register", {
        ...payload,
        description: "abcd"
      })
      .then(res => {
        dispatch(adminRegisterSuccess(res.data));
      })
      .catch(() => {
        dispatch(adminRegisterFailure());
      });
  };
};
