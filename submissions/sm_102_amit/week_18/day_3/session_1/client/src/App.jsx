import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import Axios from "axios";

import Menubar from "./component/Menubar";
import Home from "./component/Home";
import List from "./component/List";
import SignUp from "./component/SignUp";
import NotFound from "./component/NotFound";
import Login from "./component/Login";

const App = () => {
  const [state, setState] = useState({
    users: [],
    isAuth: true,
    token: ""
  });

  let ls = window.localStorage;

  const getUsers = async () => {
    if (ls.getItem("userToken") != null) {
      try {
        let data = JSON.parse(ls.getItem("userToken"));
        console.log(data);
        const res = await Axios.get("http://127.0.0.1:5000/user/list", {
          headers: { Authorization: "Bearer " + data.token }
        });
        console.log(res);
        setState({
          ...state,
          users: res.data.users
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const loggedIn = key => {
    console.log(key);
    ls.setItem("userToken", JSON.stringify({ isAuth: true, token: key }));
    setState({
      ...state,
      isAuth: true,
      token: key
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Menubar />
      <Container className="my-5">
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route
            path="/users/listing"
            component={props =>
              state.isAuth ? (
                <List {...props} data={state} />
              ) : (
                <Redirect to="/auth/login"></Redirect>
              )
            }
          />
          <Route
            path="/auth/signup"
            component={props =>
              state.isAuth ? (
                <Redirect to="/users/listing"></Redirect>
              ) : (
                <SignUp />
              )
            }
          />
          <Route
            path="/auth/login"
            component={props => <Login {...props} checkAuth={loggedIn} />}
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default App;
