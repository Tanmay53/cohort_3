import React from "react";
import { Link } from "react-router-dom";

class Head extends React.Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-3 text-center text-danger">
              <b>Teacher's Entry Database</b>
            </h1>

            <p class=" text-center text-primary">
              <h2>
                <b>Exclusive Teacher Managment System</b>
              </h2>
            </p>
          </div>
        </div>
        <div class=" text-center text-success m-5 p-5">
          <Link to="/signin">
            <b>Signin</b>
          </Link>
          <br />

          <Link to="/login">
            <b>Login</b>
          </Link>
        </div>
      </div>
    );
  }
}
export default Head;
