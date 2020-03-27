
 import axios from "axios";

import {
    REG_ADM_REQ,
    REG_ADM_Y,
    REG_ADM_N,
    LOGIN_ADM_REQ,
    LOGIN_ADM_Y,
    LOGIN_ADM_N
  } from "./ActionType";


 
  
  export const regAdminReq = (payload) => {
    return{
      type:REG_ADM_REQ,
      payload
    }
  }
  
  export const regAdminY = (payload) => {
    return{
      type:REG_ADM_Y,
      payload
    }
  }
  
  export const regAdminN = (payload) => {
    return{
      type:REG_ADM_N,
      payload
    }
  }
  
  export const loginAdminReq = () => ({
    type: LOGIN_ADM_REQ
  });
  
  export const loginY = (payload) => ({
    type: LOGIN_ADM_Y,
    payload
  });
  
  export const loginN = (payload) => ({
    type: LOGIN_ADM_N,
    error: payload
  });
  
  export const regAdmin = (payload) => {
    return dispatch => {
      dispatch(regAdminReq());
      return axios
        .post("http://localhost:8080/auth/register", {
          name: payload.name,
          email: payload.email,
          password: payload.password,
          username: payload.username,
          mobile: payload.mobile,
          desc:payload.desc,
        })
        .then(res => {
          dispatch(regAdminY(res.data));
        })
        .catch(() => dispatch(regAdminN()));
    };
  };
  
  export const loginAdmin = payload => {
    return dispatch => {
      dispatch(loginN());
      return axios
        .post("http://localhost:8080/auth/login", {
          username: payload.username,
          password: payload.password
        })
        .then(res => {
          dispatch(loginY(res.data));
        })
        .catch(() => dispatch(loginN()));
    };
  };