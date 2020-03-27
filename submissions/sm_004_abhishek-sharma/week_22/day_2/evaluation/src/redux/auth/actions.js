import { ADMIN_LOGIN, ADMIN_SIGNOUT, ADMIN_REGISTER } from "./actionTypes";
import axios from "axios";

// Admin Registration
export const registerAdmin = state => {
  console.log(state)
  const config = {
    baseURL: "http://localhost:8080",
    url: "/auth/register",
    method: "POST",
    timeout: 10000,
    data: {
      name: state.name,
      email: state.email,
      username: state.username,
      password: state.password,
      mobile: state.mobile,
      description: state.description
    }
  };

  return async dispatch => {
    try {
      const res = await axios(config);
      if (res.status === 200 && !res.data.error) {
        alert(res.data.message);
        return dispatch(Register(true));
      }
      else {
        alert(res.data.message);
        return dispatch(Register(false));
      }
    }
    catch (err) {
      alert("Registration Failed!");
      console.log(err);
      return dispatch(Register(false));
    }
  };
};

const Register = status => {
  return {
    type: ADMIN_REGISTER,
    payload: status
  };
};

// Admin Login
export const loginAdmin = state => {
  const config = {
    baseURL: "http://localhost:8080",
    url: "/auth/login",
    method: "POST",
    timeout: 10000,
    data: {
      username: state.username,
      password: state.password
    }
  };

  return async dispatch => {
    try {
      const res = await axios(config);
      if (res.status === 200 && !res.data.error) {
        alert("Login Success");
        return dispatch(Login({ status: true, token: res.data.token }));
      }
      else {
        alert(res.data.message);
        return dispatch(Login(false));
      }
    }
    catch (err) {
      alert("Unauthorized Access!");
      console.log(err);
      return dispatch(Login(false));
    }
  };
};

export const Login = status => {
  return {
    type: ADMIN_LOGIN,
    payload: status
  };
};

// Admin Logout
export const LogoutAdmin = () => ({
  type: ADMIN_SIGNOUT
});