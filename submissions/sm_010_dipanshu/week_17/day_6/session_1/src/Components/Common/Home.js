import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../Redux/Action";
import { Redirect } from "react-router-dom";

class Home extends React.Component {
  handleClick = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div className="container mt-5 shadow shadow-lg border p-3 border-dark">
          <p>Logged in successfully</p>
          <button
            className="btn btn-outline-danger mt-3 mb-3"
            onClick={this.handleClick}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logoutUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
