import React, { Component } from "react";
import "./addUser.css";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
      cibil: 0,
      loan_amt: 0,
      loan_type: ""
    };
    this.initState = this.state;
  }

  changeHandler = event => {
    let changedState = event.target.name;
    let changedVal = event.target.value;

    this.setState({
      [changedState]: [changedVal]
    });
  };

  submitForm = event => {
    let allUsers = JSON.parse(window.localStorage.getItem("allUsers"));

    if (allUsers === null) {
      allUsers = [this.state];
    } else {
      allUsers.push(this.state);
    }

    this.setState({
      ...this.initState
    });

    allUsers = JSON.stringify(allUsers);
    window.localStorage.setItem("allUsers", allUsers);

    alert("Hurray! User Added!");
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <h3>Add User Form</h3>
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.changeHandler}
              min="0"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label>CIBIL Score</label>
            <input
              type="number"
              name="cibil"
              value={this.state.cibil}
              onChange={this.changeHandler}
              min="0"
              required
            />
          </div>
          <div className="form-group">
            <label>Loan Amount</label>
            <input
              type="number"
              name="loan_amt"
              value={this.state.loan_amt}
              onChange={this.changeHandler}
              min="0"
              required
            />
          </div>
          <div className="form-group">
            <label>Loan Type</label>
            <select name="loan_type" onChange={this.changeHandler} required>
              <option value="">---</option>
              <option value="personal">Personal</option>
              <option value="education">Education</option>
              <option value="car">Car</option>
              <option value="home">Home</option>
            </select>
          </div>
          <div className="form-group">
            <input type="submit" />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default AddUser;
