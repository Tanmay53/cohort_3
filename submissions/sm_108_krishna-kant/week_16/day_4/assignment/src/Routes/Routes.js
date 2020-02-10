import React, { Component } from "react";
import { Route } from "react-router-dom";
import Userbook from "./Userbook";
import Addressbook from "./Addressbook";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Userbook} />
        <Route path="/user/:id" component={Addressbook} />
      </div>
    );
  }
}
