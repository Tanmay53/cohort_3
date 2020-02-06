/** @format */

import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import CreateUser from "./Application/CreateUser.js";
import DeleteUser from "./Application/DeleteUser.js";
// import EditUser from "./Application/EditUser.js";
// import ShowUser from "./Application/ShowUser.js";
import UserTable from "./Application/UserTable.js";

function App() {
  return (
    <Router>
      <Switch>
        
        <Route
          exact
          path="/users/listing"
          render={props => <UserTable {...props} />}
        ></Route>
        <Route
          path="/users/create"
          render={props => <CreateUser {...props} />}
        ></Route>
        <Route
          path="/users/delete/:id"
          render={props => <DeleteUser {...props} />}
        ></Route>
        {/* <Route
        path="/users/edit/:id"
        render={props => <EditUser {...props} />}
      ></Route>
      <Route
        path="/users/show/:id"
        render={props => <ShowUser {...props} />}
      ></Route> */}
      <Redirect to="/users/listing" />
      </Switch>
    </Router>
  );
}

export default App;
