import React from "react";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
const Login = props => {
  return (
    <React.Fragment>
      <h1> This is the login page </h1>
      <button onClick={() => fakeAuth.authenticate()}> Sign In </button>
    </React.Fragment>
  );
};

export default Login;
