import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchRegister } from "../Redux/auth_action";

function Register({ fetchRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const clickHandler = () => {
    console.log(email);
    console.log(password);
    console.log(name);
    let obj = {
      name,
      email,
      pass: password
    };
    fetchRegister(obj);
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="mb-4">Registration Page</h2>
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
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          <button className="btn btn-success mt-4" onClick={clickHandler}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchRegister: item => dispatch(fetchRegister(item))
});

export default connect(null, mapDispatchToProps)(Register);
