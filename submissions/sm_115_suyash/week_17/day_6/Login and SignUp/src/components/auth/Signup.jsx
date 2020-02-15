import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signUpForm } from "../../redux/action";
import { Link } from "react-router-dom";

const SignUp = ({ signUpForm }) => {
  const [myState, setMyState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setMyState({
      ...myState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    signUpForm(myState);
  };

  return (
    <div className="container">
      <div className="col-md-5 col-sm-10 text-center bg-muted border mx-auto mt-5 pt-3 pb-4 shadow-lg">
        <h3 className="pt-4 text-primary">Sign In</h3>
        <div className="my-3">
          <input
            type="name"
            className="w-50 py-1 rounded mt-3  pl-3"
            onChange={handleChange}
            name="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="my-3">
          <input
            type="email"
            className="w-50 py-1 rounded my-2 pl-3"
            onChange={handleChange}
            name="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="my-3">
          <input
            type="password"
            className="w-50 py-1 rounded my-2 pl-3"
            onChange={handleChange}
            name="password"
            placeholder="Enter Your Password"
          />
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="w-50 py-2 bg-dark mb-4 text-white"
          >
            Submit
          </button>
          <div>
            <Link to="/login" className="">
              Allready have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  signUpMsg: state.signUpMsg
});

const mapDispatchToProps = {
  signUpForm: signUpForm
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
