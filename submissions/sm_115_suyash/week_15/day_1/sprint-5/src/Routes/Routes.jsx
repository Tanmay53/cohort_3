import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import ViewTopic from "./ViewTopic";
import AddTopic from "./AddTopic";
import Edit from "./Edit";
import Login from "./Login";

const Routes = () => {
  return (
    <>
      <ul
        className="d-flex py-4 text-white bg-dark"
        style={{ listStyle: "none" }}
      >
        <li className="ml-2" style={{ marginRight: "35rem" }}>
          <Link className="bg-dark py-3 px-3 btn text-white" to="/">
            Home
          </Link>
        </li>
        {/* <li className="mx-4 px-3"></li> */}
        <li className="mx-4 px-3">
          <Link className="bg-dark py-3 px-3 btn text-white" to="/addvehicle">
            ADD A NEW TOPIC
          </Link>
        </li>
        <li className="mx-4 px-3">
          <Link className="bg-dark py-3 px-3 btn text-white" to="/view">
            VIEW TOPICS
          </Link>
        </li>
        <li className="mx-4 px-3">
          <Link className="bg-dark py-3 px-3 btn text-white" to="/login">
            Login
          </Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route exact path="/view" component={ViewTopic} />
      <Route path="/addvehicle" component={AddTopic} />
      <Route path="/login" component={Login} />
      <Route path="/edit/:id" component={Edit} />
    </>
  );
};

export default Routes;
