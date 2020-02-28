import React from "react";
import { Link, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import Home from "../components/common/Home";
import SignUp from "../components/auth/Signup";

const Routes = () => {
  return (
    <div>
      <div className="shadow">
        <ul
          className="d-flex justify-content-between"
          style={{ listStyle: "none" }}
        >
          <li className="py-3">
            <Link to="/">Home</Link>
          </li>
          <li className="py-3 pr-5">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
};

export default Routes;
