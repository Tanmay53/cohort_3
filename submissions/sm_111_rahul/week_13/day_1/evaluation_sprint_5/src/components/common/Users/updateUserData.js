/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { updateUserData } from "../redux/actions";

class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      age: "",
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
  componentDidMount() {
    const users = this.props.data.find(
      user => user.id == this.props.match.params.id
    );
    this.setState({
      id: users.id,
      name: users.name,
      email: users.email,
      age: users.age,
      cibilScore: users.cibilScore,
      loanAmount: users.loanAmount,
      loanType: users.loanType
    });
  }

  submit = e => {
    const {
      name,
      id,
      email,
      age,
      cibilScore,
      loanAmount,
      loanType
    } = this.state;
    e.preventDefault();

    if (
      name.length == 0 ||
      loanAmount.length == 0 ||
      loanType.length == 0 ||
      email.length == 0 ||
      age.length == 0 ||
      cibilScore.length == 0
    ) {
      alert("All Field are required");
    } else {
      this.props.updateUserData(this.state, id);
      alert("User data is updated");
    }
  };
  render() {
    const { name, email, age, cibilScore, loanAmount, loanType } = this.state;
    return (
      <div className="container ">
      <div className="row px-5 py-2  justify-content-center">
        <div className="col-11 col-md-8 col-lg-6 bg-light  border p-2 d-flex">
        <form className="">
          <h2 className="text-center text-primary">Update User Data </h2>
          <TextField
            className=" m-2"
            id="outlined-basic"
            onChange={this.handleChange}
            name="name"
            label="Name"
            variant="outlined"
            value={name}
          />
          <TextField
            id="outlined-basic"
            className="m-2"
            onChange={this.handleChange}
            name="email"
            label="Email"
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
            label="loanType"
            variant="outlined"
            value={loanType}
          />
          <Button
            onClick={this.submit}
            variant="outlined"
            className="py-2  m-2 bg-danger text-white"
            
          >
            Update User Data
          </Button>
          <div>
            <Link className="btn btn-danger nav-link mx-3" to="/">
              Home
            </Link>
          </div>
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
    updateUserData: (newUser, id) => dispatch(updateUserData(newUser, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
