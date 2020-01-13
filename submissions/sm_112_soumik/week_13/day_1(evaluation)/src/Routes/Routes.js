import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import SignIn from "../Components/auth/Login";
import Home from "../Components/common/Home";
import AddProduct from "../Components/common/addProduct";
import ViewProducts from "../Components/common/viewProducts";
import EachUser from "../Components/common/EachUser";

function Routes() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand text-light"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/products" className="nav-link active">
                View Products
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/addproduct" classname="nav-link active">
                Add Products
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="login" className="nav-link active">
                <button className="btn btn-danger">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/login" component={() => <SignIn />} />
        <Route path="/addproduct" component={() => <AddProduct />} />
        <Route
          path="/products"
          component={props => <ViewProducts {...props} />}
        />
        <Route path="/products/:id" component={() => <EachUser />} />
      </Switch>
    </div>
  );
}

export default Routes;
