import React from "react";
import { Route, Link } from "react-router-dom";
import ViewVehicle from "./ViewVehicle";
import AddVehicle from "./AddVehicle";
import Edit from "./Edit";
import Login from "./Login";

const Routes = () => {
  return (
    <>
      <ul
        className="d-flex py-4 text-white bg-dark"
        style={{ listStyle: "none" }}
      >
        <li className="ml-2" style={{ marginRight: "45rem" }}>
          <Link className="text-white" to="/">
            VIEW ALL VEHICLES
          </Link>
        </li>
        <li className="mx-4 px-3">
          <Link className="text-white" to="/addvehicle">
            ADD NEW VEHICLES
          </Link>
        </li>
        <li className="mx-4 px-3">
          <Link className="text-white" to="/login">
            Login
          </Link>
        </li>
      </ul>
      <Route exact path="/" component={ViewVehicle} />
      <Route path="/addvehicle" component={AddVehicle} />
      <Route path="/login" component={Login} />
      <Route path="/edit/:id" component={Edit} />
    </>
  );
};

export default Routes;
