import axios from "axios";

const SIGNUP = "signup";
const LOGIN = "login";
const LOGOUT = "logout";

export const signup = state => {
  const config = {
    baseURL: "http://localhost:5000",
    url: "/auth/signup",
    method: "POST",
    timeout: 10000,
    data: {
      name: state.name,
      email: state.email,
      password: state.password
    }
  };

  return dispatch => {
    return axios(config)
      .then(res => {
        if (res.data.status === 200) {
          alert(res.data.message);
          return dispatch(signupUser(false));
        } else {
          alert(res.data.message);
          return dispatch(signupUser(true));
        }
      })
      .catch(err => {
        alert("Signup Failed");
        console.log(err);
        return dispatch(signupUser(true));
      });
  };
};

export const signupUser = signupError => {
  return { type: SIGNUP, payload: signupError };
};

export const login = state => {
  const config = {
    baseURL: "http://localhost:5000",
    url: "/auth/login",
    method: "POST",
    timeout: 10000,
    data: {
      email: state.email,
      password: state.password
    }
  };

  return dispatch => {
    return axios(config)
      .then(res => {
        if (res.data.status === 200) {
          return dispatch(loginUser(true));
        } else {
          alert(res.data.message);
          return dispatch(loginUser(false));
        }
      })
      .catch(err => {
        alert("Login Failed");
        console.log(err);
        return dispatch(loginUser(false));
      });
  };
};

export const loginUser = status => {
  return { type: LOGIN, payload: status };
};

export const logoutUser = () => {
  return { type: LOGOUT };
};
