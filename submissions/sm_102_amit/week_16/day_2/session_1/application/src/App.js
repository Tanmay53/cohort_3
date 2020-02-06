import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Axios from "axios";

import Menubar from "./component/Menubar";
import Home from "./component/Home";
import List from "./component/List";
import Add from "./component/Add";
import NotFound from "./component/NotFound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      totalPages: 0,
      page: 1,
      size: 10
    };
  }

  getUsers = async () => {
    try {
      const res = await Axios.get("http://127.0.0.1:5000/list", {
        params: {
          page: this.state.page,
          size: this.state.size
        }
      });
      console.log(res);
      this.setState({
        users: res.data.users,
        totalPages: res.data.pages
      });
    } catch (err) {
      console.error(err);
    }
  };

  getParams = queryParams => {
    console.log(queryParams);
    this.setState(
      {
        page: queryParams.page,
        size: queryParams.limit
      },
      () => {
        this.getUsers();
        this.forceUpdate();
      }
    );
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
              exact={true}
              component={props => (
                <List {...props} data={this.state} getParams={this.getParams} />
              )}
            />
            <Route
              path="/users/create"
              exact={true}
              component={props => <Add {...props} fetchUsers={this.getUsers} />}
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
