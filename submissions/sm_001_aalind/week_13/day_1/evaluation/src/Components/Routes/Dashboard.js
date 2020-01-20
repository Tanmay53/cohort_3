import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <Link to="/adduser">ADD NEW USER</Link>
          </li>
          <li>
            <Link to="/allusers">VIEW ALL USERS</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Dashboard;
