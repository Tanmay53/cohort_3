/** @format */

import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Application/home.js";
import Mark from "./Application/mark.js";
import Delete from "./Application/delete.js";
import Done from "./Application/done.js";
import Change from "./Application/change.js";
import Add from "./Application/add.js";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/change/:id" render={props => <Change {...props} />}></Route>
      <Route path="/add" component={Add}></Route>
      <Route path="/delete/:id" render={props => <Delete {...props} />}></Route>
      <Route path="/mark/:id" render={props => <Mark {...props} />}></Route>
      <Route path="/done" component={Done}></Route>
    </BrowserRouter>
  );
}

export default App;
