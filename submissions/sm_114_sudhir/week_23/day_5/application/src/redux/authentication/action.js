import axios from 'axios'
import {
    LOGIN_ADMIN_REQUEST,
    LOGIN_ADMIN_SUCCESS,
    LOGIN_ADMIN_FAILURE,
    LOGOUT_ADMIN_REQUEST,
    REG_ADMIN_REQUEST,
    REG_ADMIN_SUCCESS,
    REG_ADMIN_FAILURE
  } from "./types";
  
  // register admin
  export const registerAdminRequest = (payload) => ({
    type: REG_ADMIN_REQUEST,
    payload: payload
  })

  export const registerAdminSuccess = (payload) => ({
    type: REG_ADMIN_SUCCESS,
    payload: payload
  })

  export const registerAdminFailure = (error) => ({
    type: REG_ADMIN_FAILURE,
    error: error
  })

  // resgister admin action creator
  export const registerAdmin = (url, payload) => {
    return dispatch => {
      dispatch(registerAdminRequest());
      return axios
        .post(url, {...payload})
        .then(res => {
          alert(res.data.message)
          console.log(res.data.message)
          dispatch(registerAdminSuccess(res.data.message));
        })
        .catch((err) => dispatch(registerAdminFailure(err)));
    };
  }
  
  // login action
  export const loginAdminRequest = () => ({
    type: LOGIN_ADMIN_REQUEST
  });
  
  export const loginAdminSuccess = payload => ({
    type: LOGIN_ADMIN_SUCCESS,
    payload
  });
  
  export const loginAdminFailure = payload => ({
    type: LOGIN_ADMIN_FAILURE,
    error: payload
  });
  
  // login action creator
  export const loginAdmin = (url, payload) => {
    return dispatch => {
      dispatch(loginAdminRequest());
      return axios
        .post(url, {...payload})
        .then(res => {
          alert(res.data.message)
          if(!res.data.error) {
            let data = {
              "isLoggedIn": true,
              "token": res.data.token
            }
            localStorage.setItem("user", JSON.stringify(data))
          }
          dispatch(loginAdminSuccess(res.data));
        })
        .catch(() => dispatch(loginAdminFailure()));
    };
  };
  
  // Logout action
  export const logoutAdminRequest = payload => ({
    type: LOGOUT_ADMIN_REQUEST,
    payload
    
  });
