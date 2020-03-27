import { USER_REGISTER, USER_LOGIN, USER_LOGOUT } from "./actionTypes";
import axios from "axios";

export const registerUser = state => {
    const params = {
        url: "http://localhost:8080/auth/register",
        method: "POST",
        data: {
            name: state.name,
            email: state.email,
            username: state.username,
            password: state.password,
            mobile: state.mobile,
            description: state.description
        }
    }
    return async dispatch => {
        try {
          const res = await axios(params)
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
          return dispatch(Register(false));
        }
      };
}

const Register = status => {
    return {
      type: USER_REGISTER,
      payload: status
    }
}

export const loginUser = state => {
    const params = {
        url: "http://localhost:8080/auth/login",
        method: "POST",
        data: {
            username: state.username,
            password: state.password
        }
    };
  
    return async dispatch => {
      try {
        const res = await axios(params);
        if (res.status === 200 && !res.data.error) {
            alert("Login Successful!");
            return dispatch(Login({ status: true, token: res.data.token }));
        }
        else {
          alert(res.data.message);
          return dispatch(Login(false));
        }
      }
      catch (err) {
        alert("Unauthorised Access!");
        return dispatch(Login(false));
      }
    };
};
  
export const Login = status => {
  return {
    type: USER_LOGIN,
    payload: status
  };
};

export const logoutUser = () => ({
  type: USER_LOGOUT
});
