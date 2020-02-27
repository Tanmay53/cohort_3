import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGGED_OUT } from "./actionType";
import axios from "axios";
import swal from "sweetalert";

export const userLogin = item => {
  console.log(item);
  if (item.token !== undefined) {
    localStorage.setItem("token", JSON.stringify(item.token));
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  }
  swal(item.status);
  return {
    type: LOGIN_SUCCESS,
    payload: item
  };
};

export const userRegister = item => {
  swal(item);
  return {
    type: REGISTER_SUCCESS,
    payload: item
  };
};

export const fetchLogin = ({ email, pass }) => {
  return dispatch => {
    axios
      .post("http://localhost:5000/login", {
        email,
        password: pass
      })
      .then(res => dispatch(userLogin(res.data)));
  };
};

export const fetchRegister = ({ email, pass, name }) => {
  return dispatch => {
    axios
      .post("http://localhost:5000/auth/signup", {
        email: email,
        password: pass,
        username: name
      })
      .then(res => dispatch(userRegister(res.data)))
      .catch(err => console.log(err));
  };
};

export const logout = () => {
  return {
    type: LOGGED_OUT
  };
};
