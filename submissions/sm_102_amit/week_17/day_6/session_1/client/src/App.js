import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import Axios from "axios";

import Menubar from "./component/Menubar";
import Home from "./component/Home";
import List from "./component/List";
import SignUp from "./component/SignUp";
import NotFound from "./component/NotFound";
import Login from "./component/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isAuth: false
    };
  }

  getUsers = async () => {
    try {
      const res = await Axios.get("http://127.0.0.1:5000/user/list");
      console.log(res);
      this.setState({
        users: res.data.users
      });
    } catch (err) {
      console.error(err);
    }
  };

  loggedIn = () => {
    this.setState({
      isAuth: true
    });
  };
  componentDidMount = () => {
    this.getUsers();
  };

  render() {
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
                this.state.isAuth ? (
                  <List {...props} data={this.state} />
                ) : (
                  <Redirect to="/auth/login"></Redirect>
                )
              }
            />
            <Route
              path="/auth/signup"
              component={props =>
                this.state.isAuth ? (
                  <Redirect to="/users/listing"></Redirect>
                ) : (
                  <SignUp />
                )
              }
            />
            <Route
              path="/auth/login"
              component={props => (
                <Login {...props} checkAuth={this.loggedIn} />
              )}
            />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Container>
      </>
    );
  }
}

export default App;
