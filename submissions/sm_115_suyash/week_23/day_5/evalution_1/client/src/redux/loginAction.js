import axios from "axios";
export const AXIOS_REQUEST = "AXIOS_REQUEST";
export const SIGN_UP_SUCCESSFULLY = "SIGN_UP_SUCCESSFULLY";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";
export const SIGN_IN_SUCCESSFULLY = "SIGN_IN_SUCCESSFULLY";
export const SIGN_IN_FAIL = "SIGN_IN_FAIL";

export const axiosRequest = () => ({
  type: AXIOS_REQUEST
});

export const signUpSuccessfully = payload => ({
  type: SIGN_UP_SUCCESSFULLY,
  payload
});

export const signUpFail = payload => ({
  type: SIGN_UP_FAIL,
  payload
});

export const singUpReq = payload => dispatch => {
  dispatch(axiosRequest());
  axios({
    url: "http://localhost:5000/signup",
    data: payload,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => {
      dispatch(signUpSuccessfully(res.data));
    })
    .catch(err => {
      console.log(err.message, "<----sign fail");
    });
};

export const signInSuccessfully = payload => ({
  type: SIGN_IN_SUCCESSFULLY,
  payload
});

export const signInFail = payload => ({
  type: SIGN_IN_FAIL,
  payload
});

export const singInReq = payload => dispatch => {
  dispatch(axiosRequest());
  axios({
    url: "http://localhost:5000/login",
    data: payload,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => {
      dispatch(signInSuccessfully(res.data));
    })
    .catch(err => {
      console.log("SIGN fail------>", err.message);
    });
};
