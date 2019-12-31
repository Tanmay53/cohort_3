import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Add from "./Add";
import View from "./View";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userDB: []
    };
  }

  updateUserDB = user => {
    console.log("Lifted state received from add.js", user);
    this.state.userDB.push(user);

    this.setState({
      userDB: this.state.userDB
    });

    setTimeout(() => {
      console.log("UserDb is =>", this.state.userDB);
    }, 1);
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row text-center p-3">
            <li className="shadow shadow-lg col-1 mx-auto border border-dark rounded p-2 list-group-item">
              <Link to="/add">Add</Link>
            </li>
            <li className="shadow shadow-lg col-1 mx-auto border border-dark rounded p-2 list-group-item">
              <Link to="/view">View</Link>
            </li>
          </div>

          <Route
            path="/add"
            render={props => <Add {...props} function={this.updateUserDB} />}
          />
          {/* <Route path="/add" component={Add} function={this.updateUserDB} /> */}
          <Route path="/view" component={View} />
        </div>
      </Router>
    );
  }
}
export default Dashboard;
