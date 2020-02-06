import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Create from "../Pages/Create";
import Listings from "../Pages/Listings";
import EditPage from "../Pages/EditPage";
import DeletePage from "../Pages/DeletePage";

function Routes() {
  return (
    <div>
      <nav className="nav bg-primary d-flex justify-content-center">
        <Link to="/" className="nav-link text-light">
          Home
        </Link>
        <Link to="/users/create" className="nav-link text-light">
          Add Users
        </Link>
        <Link to="/users/listings" className="nav-link text-light">
          Show All Users
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/create" component={Create} />
        <Route exact path="/users/listings" component={Listings} />
        <Route
          path="/users/edit/:id"
          component={props => <EditPage {...props} />}
        />
        <Route
          path="/users/delete/:id"
          component={props => <DeletePage {...props} />}
        />
      </Switch>
    </div>
  );
}

export default Routes;
