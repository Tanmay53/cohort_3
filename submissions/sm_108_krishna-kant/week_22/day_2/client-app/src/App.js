import React, { useEffect } from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./Routes/Login";
import Signup from "./Routes/Signup";
import { connect } from "react-redux";
import { getUser, logout } from "./redux/actions/auth";
import Dashboard from "./Routes/Dashboard";
import Myfeed from "./Routes/Myfeed";
import Create from "./Routes/Create";
import Friends from "./Routes/Friends";

function App({ isAuth, getUser, logout }) {
  useEffect(() => {
    let token = localStorage.getItem("token");
    getUser(token);
  }, []);
  return (
    <div className="App">
      <Route
        path="/"
        component={props => (
          <Navbar isAuth={isAuth} logout={logout} {...props}></Navbar>
        )}
      ></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
      {isAuth ? (
        <Route path="/" exact component={Dashboard}></Route>
      ) : (
        <Redirect to="/login"></Redirect>
      )}
      {isAuth ? (
        <Route path="/tweets" exact component={Myfeed}></Route>
      ) : (
        <Redirect to="/login"></Redirect>
      )}
      {isAuth ? (
        <Route path="/create-tweet" exact component={Create}></Route>
      ) : (
        <Redirect to="/login"></Redirect>
      )}
      {isAuth ? (
        <Route path="/users" exact component={Friends}></Route>
      ) : (
        <Redirect to="/login"></Redirect>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { getUser, logout })(App);
