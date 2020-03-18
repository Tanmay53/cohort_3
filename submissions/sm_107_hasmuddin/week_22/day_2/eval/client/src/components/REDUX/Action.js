import axios from "axios";

export const fetch_res = response => {
  return {
    type: "FETCH_RES",
    payload: response
  };
};
export const login_register = (types, res) => {
  return {
    type: types,
    payload: res
  }
}

export const fetch_employees = (data, url) => {
  return dispatch => {
    var config = {
      method: "POST",
      baseURL: "http://127.0.0.1:5000",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data
    };
    axios(config)
      .then(res => {
        dispatch(fetch_res(res.data));
      })
      .catch(er => console.log(er.message));
  };
};

export const Admin_register_login = (data, url, types) => {
  return dispatch => {
    var config = {
      method: "POST",
      baseURL: "http://127.0.0.1:5000",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data
    };
    axios(config)
      .then(res => {
        dispatch(login_register(types, res.data));
      })
      .catch(er => console.log(er.message));
  };
};


