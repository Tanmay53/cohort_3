import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import SignInSide from "../Components/Login";
import Home from "../Pages/Home";
import AddUserINfo from "../Pages/AddUserInfo";
import EnhancedTable from "../Pages/ShowUserDetails";
import NewPost from "../Pages/NewPost";

function Routes() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">Sprint 5 Eve</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to="/" className="nav-link text-dark">
              Home
            </Link>
          </li>
        </ul>
        <Link to="/login">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Login
          </button>
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/login" component={() => <SignInSide />} />
        <Route exact path="/adduser" component={() => <AddUserINfo />} />
        <Route exact path="/showpost" component={() => <EnhancedTable />} />
        <Route
          exact
          path="/showpost/:title"
          component={props => <NewPost {...props} />}
        />
      </Switch>
    </div>
  );
}

export default Routes;
