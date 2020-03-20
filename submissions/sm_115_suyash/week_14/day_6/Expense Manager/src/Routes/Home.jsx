import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false
    };
  }

  render() {
    return (
      <div className="text-center">
        <h1 className="display-3 pt-4 heading">Expense Manager</h1>
        <div className="pt-2 pb-4">
          <img
            className="img"
            src="https://cdn.dribbble.com/users/345970/screenshots/5924753/wallet_app_dribbble_2x.png"
            alt="expanse"
          />
        </div>
        {this.props.isAuth ? (
          <Link className="btn text-white bg-dark py-2 px -3" to="/add">
            Add Data
          </Link>
        ) : (
          <Link className="btn text-white bg-dark py-2 px-5 mb-3" to="/login">
            Login
          </Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.isAuth
});

export default connect(mapStateToProps, null)(Home);
