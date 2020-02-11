import React, { Component } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginForm } from "../../redux/action";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitFrom = e => {
    e.preventDefault();
    if (this.state.email != "" && this.state.password != "") {
      this.props.loginForm(this.state);
    } else {
      alert("Fill input properly");
    }
  };

  render() {
    return (
      <div>
        {this.props.isAuth ? (
          <h1 className="mt-5 text-success">Login Successfully</h1>
        ) : (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "70vh" }}
          >
            <div className={styles.addItem}>
              <form className="p-5 text-center">
                <label className="h1 font-weight-normal">Login</label>
                <div className="py-3">
                  <input
                    className={styles.addItemInput}
                    type="email"
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.email}
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="py-3 ">
                  <input
                    className={styles.addItemInput}
                    type="password"
                    onChange={this.handleChange}
                    name="password"
                    value={this.state.password}
                    placeholder="Enter Your Password"
                  />
                </div>
                <button
                  className="text-white w-50 py-2 mt-3"
                  className={styles.myBtn}
                  onClick={this.submitFrom}
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        )}
        <Link
          to="/"
          className="text-white bg-dark text-center py-2 px-3 ml-3 mt-3"
        >
          Go Back
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.isAuth
});

const mapDispatchToProps = {
  loginForm: payload => loginForm(payload)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
