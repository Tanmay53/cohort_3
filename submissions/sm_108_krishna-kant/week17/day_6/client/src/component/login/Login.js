import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    loading: false,
    isError: false
  });

  const { email, password, loading, isError, response } = login;

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

    console.log(response);

    setLogin({
      ...login,
      loading: false
    });

    alert(response.msg);
  };

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
    </div>
  );
}
