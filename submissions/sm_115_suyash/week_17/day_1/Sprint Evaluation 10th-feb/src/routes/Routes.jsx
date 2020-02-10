import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import NotFound from "./NotFound";
import BookingPage from "../components/common/BookingPage";
import Home from "../components/common/Home";
import Orders from "../components/common/Orders";
import Login from "../components/auth/Login";

const Routes = () => {
  return (
    <div>
      <ul className="bg-dark d-flex" style={{ listStyle: "none" }}>
        <li className="py-2 mx-3 d-inline-block">
          <Link className="text-white px-3" to="/">
            Home
          </Link>
        </li>
        <li className="py-2 mx-3 d-inline-block">
          <Link className="text-white px-3" to="/orders">
            Orders
          </Link>
        </li>
        <li className="py-2 mx-3 d-inline-block">
          <Link className="text-white px-3" to="/login">
            Login
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRouter path="/orders" component={Orders} />
        <ProtectedRouter path="/login" component={Login} />
        <ProtectedRouter path="/booking-page/:id" component={BookingPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
