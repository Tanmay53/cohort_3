import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LogoutUser } from "../../Redux/Action";

class Navbar extends React.Component {
  handleClick = event => {
    event.preventDefault();
    
    if (this.props.isLoggedIn) {
      this.props.logout();
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <h5 className="mr-3">Booking Management System</h5>
        <ul className="navbar-nav mr-3 mt-2 mt-lg-0">
          <Link to="/home">
            <h5 className="text-light">Home</h5>
          </Link>
        </ul>
        <ul className="navbar-nav mr-3 mt-2 mt-lg-0">
          <Link to="/orders">
            <h5 className="text-light">Orders</h5>
          </Link>
        </ul>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <h5 className="text-success">{this.props.userToken}</h5>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button
            className="btn btn-danger my-2 my-sm-0"
            type="submit"
            onClick={this.handleClick}
          >
            Logout
          </button>
        </form>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    userToken: state.userToken,
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(LogoutUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
