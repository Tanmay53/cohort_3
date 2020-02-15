import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

export default function Signup() {
  const [signup, setsignup] = useState({
    email: "",
    password: "",
    name: "",
    loading: false,
    res: false,
    isSignup: false,
    token: ""
  });

  const { email, password, loading, isSignup, res, token, name } = signup;

  const handleChange = e => {
    setsignup({
      ...signup,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setsignup({
      ...signup,
      loading: true
    });
    let user = { email, password, name };
    let response = {
      ...(await axios("auth/signup", "POST", user, {
        "Content-Type": "application/json"
      }))
    }.data;

    setsignup({
      ...signup,
      loading: false,
      res: true,
      token: response.token || response.msg
    });
  };

  useEffect(() => {
    if (loading === false && res === true) {
      setsignup({
        ...signup,
        isSignup: true
      });
    }
  }, [loading, res]);

  return (
    <div className="card col-lg-4 col-md-6 col-sm-10 col-xs-10 p-3 mx-auto mt-5">
      <h3>Signup Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={handleChange}
            value={name}
            name="name"
            required
            className="form-control"
          ></input>
        </div>
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
        <button className="btn  btn-primary btn-block">Signup</button>
      </form>
      {isSignup ? (
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
