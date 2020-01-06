import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/auth" />;
    } else {
      return (
        <div className="container mt-5">
          <div className="text-center">
            <p className="display-4">Vehicle Manager</p>
            <Link to="/dashboard/add">
              <button className="btn-primary btn-lg rounded mx-5 mt-5 shadow shadow-lg">
                Add
              </button>
            </Link>
            <Link to="/dashboard/view">
              <button className="btn-primary btn-lg rounded mx-5 mt-5 shadow shadow-lg">
                View
              </button>
            </Link>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn };
};

export default connect(mapStateToProps)(Dashboard);
