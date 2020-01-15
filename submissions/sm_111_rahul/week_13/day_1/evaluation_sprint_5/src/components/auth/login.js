/** @format */

import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Auth from "./auth";
import DataBase from "../common/Users/userDatabase";
import { addUser } from "../common/redux/actions";
import { connect } from "react-redux";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userN: "",
      pass: "",
      adminUser: "admin",
      adminPass: "admin"
    };
  }
  componentDidMount() {
    const data = DataBase();
    console.log(data);
    data.forEach(user => {
      this.props.addUser(user);
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = () => {
    const { userN, pass, adminUser, adminPass } = this.state;

    if (userN === adminUser && pass === adminPass) {
      Auth.login(() => {
        this.props.history.push("/");
      });
    } else {
      alert("Invalid password/username");
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-md-10 col-lg-6">
            <h1 className="text-center ">Login</h1>
            <form>
              <TextField
                className="m-3"
                id="outlined-basic"
                onChange={this.handleChange}
                name="userN"
                placeholder="Default User - admin"
                variant="outlined"
              />
              <TextField
                className="m-3"
                id="outlined-basic"
                onChange={this.handleChange}
                name="pass"
                placeholder="Default Pass - admin"
                variant="outlined"
              />
              <Button onClick={this.submit} variant="outlined">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
