/** @format */

import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addUser } from "../redux/actions";
import {Link} from "react-router-dom";

let genId = 5;

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      id: "",
      email: "",
      cibilScore: "",
      loanAmount: "",
      loanType: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    const { name, email, cibilScore, loanAmount, loanType, age } = this.state;
    e.preventDefault();

    if (
      name.length == 0 ||
      age.length == 0 ||
      email.length == 0 ||
      cibilScore.length == 0 ||
      loanAmount.length == 0 ||
      loanType.length == 0
    ) {
      alert("All Field are required");
    } else {
      this.props.addUser({ ...this.state, id: genId++ });
      alert("User is added");
      this.reset();
    }
  };

  reset = () => {
    this.setState({
      name: "",
      age: "",
      email: "",
      cibilScore: "",
      loanAmount: "",
      loanType: ""
    });
  };

  render() {
    const { name, age, email, cibilScore, loanAmount, loanType } = this.state;
    return (
      <div className="container ">
        <div className="row p-3 d-flex justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 ">
            <form className="  border p-3 ">
              <h2 className="text-center">Add New User</h2>
              <TextField
                className=" m-2"
                id="outlined-basic"
                onChange={this.handleChange}
                name="name"
                label="User Name"
                variant="outlined"
                value={name}
              />
              <TextField
                id="outlined-basic"
                className="m-2"
                onChange={this.handleChange}
                name="email"
                label="Email"
                placeholder="abc@gmail.com"
                variant="outlined"
                value={email}
              />
              <TextField
                id="outlined-basic"
                className=" m-2"
                onChange={this.handleChange}
                name="age"
                label="Age"
                variant="outlined"
                value={age}
              />
              <TextField
                id="outlined-basic"
                className=" m-2"
                onChange={this.handleChange}
                name="cibilScore"
                label="Cibil Score"
                variant="outlined"
                value={cibilScore}
              />
              <TextField
                id="outlined-basic"
                className=" m-2"
                onChange={this.handleChange}
                name="loanAmount"
                label="Loan Amount"
                variant="outlined"
                value={loanAmount}
              />
              <TextField
                id="outlined-basic"
                className=" m-2"
                onChange={this.handleChange}
                name="loanType"
                label="Loan Type"
                variant="outlined"
                value={loanType}
              />
              <br></br>
              <Button
                onClick={this.submit}
                variant="outlined"
                className="py-2  m-2 bg-danger text-white"
              >
                Add User
              </Button>
              <Link className="btn btn-danger mx-3" to="/">
              Home
            </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
