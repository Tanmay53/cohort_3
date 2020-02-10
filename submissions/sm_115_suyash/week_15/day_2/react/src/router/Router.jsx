import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "../components/Home";
import AddItem from "../components/AddItem";
import PurchasedList from "../components/PurchasedList";
import Purchased from "../components/Purchased";
import EditItem from "../components/EditItem";
import "../App.css";

export default class Router extends Component {
  render() {
    return (
      <>
        <div className="container-fluid bg-secondary">
          <div className="row text-center">
            <div className="col-md-4 ">
              <Link className="py-3 px-4 d-inline-block route-link" to="/">
                Home
              </Link>
            </div>
            <div className="col-md-4">
              <Link
                className="py-3 px-4 d-inline-block route-link"
                to="/additem"
              >
                Add Items
              </Link>
            </div>
            <div className="col-md-4">
              <Link
                className="py-3 px-4 d-inline-block route-link"
                to="/showcart"
              >
                Your Orders
              </Link>
            </div>
          </div>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/additem" component={AddItem} />
        <Route path="/showcart" exact component={PurchasedList} />
        <Route path="/purchasedItem/:id" component={Purchased} />
        <Route path="/editItem/:id" component={EditItem} />
      </>
    );
  }
}
