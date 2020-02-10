import { SIGNUP, LOGIN, LOGOUT } from "./ActionNames";
import axios from "axios";

export const SignupUser = state => {
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

  return dispatch => {
    return axios(config)
      .then(res => {
        if (res.status === 200 && !res.data.error) {
          alert(res.data.message);
          return dispatch(SignUp(true));
        } else {
          alert(res.data.message);
          return dispatch(SignUp(false));
        }
      })
      .catch(err => {
        alert("Signup Failed");
        console.log(err);
        return dispatch(SignUp(false));
      });
  };
};

const SignUp = status => {
  return {
    type: SIGNUP,
    payload: status
  };
};

export const LoginUser = state => {
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

  return dispatch => {
    return axios(config)
      .then(res => {
        if (res.status === 200 && !res.data.error) {
          alert("Login Success");
          return dispatch(Login({ status: true, token: res.data.token }));
        } else {
          alert(res.data.message);
          return dispatch(Login(false));
        }
      })
      .catch(err => {
        alert("Login Failed");
        console.log(err);
        return dispatch(Login(false));
      });
  };
};

export const Login = status => {
  return {
    type: LOGIN,
    payload: status
  };
};

export const LogoutUser = () => ({
  type: LOGOUT
});
