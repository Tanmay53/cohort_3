import axios from "axios";
export const AXIOS_LODING = "AXIOS_LODING";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FORM = "SIGN_UP_FORM";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FORM = "LOGIN_FORM";
export const LOGOUT = "LOGOUT";
export const USER_AUTH = "USER_AUTH";
export const USER_AUTH_SUCCESS = "USER_AUTH_SUCCESS";

export const axiosLoading = () => ({
  type: AXIOS_LODING
});

export const signUpSuccess = payload => ({
  type: SIGN_UP_SUCCESS,
  payload
});
 
export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const signUpForm = payload => dispatch => {
  dispatch(axiosLoading());
  axios({
    url: "http://localhost:5000/signup",
    data: payload,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => {
      console.log(res);
      dispatch(signUpSuccess(res.data));
    })
    .catch(err => {
      console.log("SIGN fail------>", err.message);
    });
};

export const loginForm = payload => dispatch => {
  dispatch(axiosLoading());
  axios({
    url: "http://localhost:5000/login",
    data: payload,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => {
      console.log(res);
      dispatch(loginSuccess(res.data));
    })
    .catch(err => {
      console.log("Login fail---->", err.message);
    });
};

export const logout = payload => ({
  type: LOGOUT,
  payload
});

export const userAuthSuccess = payload => ({
  type: USER_AUTH_SUCCESS,
  payload
});

export const userAuth = payload => dispatch => {
  dispatch(axiosLoading());
  axios({
    url: `http://localhost:5000/auth/details`,
    headers: {
      Authorization: `Bearer ${payload}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  })
    .then(res => {
      console.log(res.data);
      // dispatch(userAuthSuccess(user.data))
    })
    .catch(err => {
      console.log(err);
    });
};
