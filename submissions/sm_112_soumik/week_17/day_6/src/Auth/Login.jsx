import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchLogin } from "../Redux/auth_action";

function Login({ fetchUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const clickHandler = () => {
    let obj = {
      email,
      pass: password
    };
    fetchUser(obj);
  };
  return (
    <div className="text-center">
      <h2 className="mb-4">Login Page</h2>
      <div className="col-md-5 border border-danger p-4 m-auto">
        <label>Name</label>
        <input
          className="form-control "
          placeholder="Enter Your Name"
          onChange={e => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          className="form-control"
          placeholder="Enter your Email"
          type="email"
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="form-control"
          placeholder="Enter Your Password"
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        <button className="btn btn-success mt-4" onClick={clickHandler}>
          Login
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  fetchUser: item => dispatch(fetchLogin(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
