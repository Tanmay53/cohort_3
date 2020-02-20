import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    loading: false,
    res: false,
    isLogin: false,
    token: ""
  });

  const { email, password, loading, isLogin, res, token } = login;

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLogin({
      ...login,
      loading: true
    });
    let user = { email, password };
    let response = {
      ...(await axios("auth/login", "POST", user, {
        "Content-Type": "application/json"
      }))
    }.data;

    let flag = false;

    response.token ? (flag = true) : (flag = false);

    setLogin({
      ...login,
      loading: false,
      res: flag,
      token: response.token || response.msg
    });
  };

  useEffect(() => {
    if (loading === false && res === true) {
      setLogin({
        ...login,
        isLogin: true
      });
    }
  }, [loading, res]);

  return (
    <div className="card col-lg-4 col-md-6 col-sm-10 col-xs-10 p-3 mx-auto mt-5">
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            onChange={handleChange}
            value={email}
            name="email"
            required
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            onChange={handleChange}
            value={password}
            name="password"
            required
            className="form-control"
          ></input>
        </div>
        <button className="btn  btn-primary btn-block">Login</button>
      </form>
      {isLogin ? (
        <div className="alert alert-success m-4" role="alert">
          {token}
        </div>
      ) : null}
      {loading ? (
        <div className="text-center m-4">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
