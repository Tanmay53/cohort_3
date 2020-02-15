import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginForm, logout } from "../../redux/action";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Login = ({ logout, loginForm, message, isAuth }) => {
  const [email, setEmail] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = () => {
    if (email.email != "" && email.password != "") {
      loginForm(email);
      setEmail({
        ...email,
        email: "",
        password: ""
      });
      if (!isAuth) swal("Here's the title!", "Invalid User OR password");
    } else {
      swal("Invalid Inputs!", "Fill input properly");
    }
  };

  const handleLogout = () => {
    logout();
    swal("Logged out", "Thankyou! for visiting", "success");
  };
  if (isAuth) {
    swal("Login Successful", "Welcome to my website", "success");
  }
  return (
    <div className="container">
      {isAuth ? (
        <div>
          <button
            onClick={handleLogout}
            className="w-50 py-2 bg-dark mb-4 text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="col-md-5 col-sm-10 text-center bg-muted border mx-auto mt-5 pt-3 pb-4 shadow-lg">
          <h3 className="pt-4 text-primary">Sign In</h3>
          <div className="my-3">
            <input
              type="email"
              value={email.email}
              className="w-50 py-1 rounded mt-3  pl-3"
              name="email"
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="my-3">
            <input
              value={email.password}
              type="password"
              className="w-50 py-1 rounded my-2 pl-3"
              name="password"
              onChange={handleChange}
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
              <Link to="/signup" className="">
                Don't have an account? Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  message: state.loginMsg,
  isAuth: state.isAuth
});

const mapDispatchToProps = {
  loginForm: loginForm,
  logout: logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
