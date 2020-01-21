import React, { Component } from "react";
// import { Link } from "react-router-dom";
import allUsersData from "./allUsersData";
import "./allUsersTable.css";

class AllUsers extends Component {
  constructor() {
    super();
    this.state = {
      allUsers: []
    };
  }

  componentDidMount = () => {
    let allUsers = JSON.parse(window.localStorage.getItem("allUsers"));
    // let allUsers = allUsersData.users;

    if (allUsers) {
      this.setState({
        allUsers: allUsers
      });
    }
  };

  renderTableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>CIBIL</th>
          <th>Loan Amount</th>
          <th>Loan Type</th>
        </tr>
      </thead>
    );
  };

  renderTableData = allUsers => {
    return allUsers.map((user, index) => {
      // console.log(user);
      const { name, age, email, cibil, loan_amt, loan_type } = user;

      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
          <td>{cibil}</td>
          <td>{loan_amt}</td>
          <td>{loan_type}</td>
        </tr>
      );
    });
  };

  render() {
    // console.log(this.state.allUsers[0]);
    return (
      <React.Fragment>
        {this.state.allUsers.length ? (
          <table>
            {this.renderTableHeader()}
            <tbody>
              {this.state.allUsers.length !== 0
                ? this.renderTableData(this.state.allUsers)
                : null}
            </tbody>
          </table>
        ) : (
          <h2>No User Records!!</h2>
        )}
      </React.Fragment>
    );
  }
}

export default AllUsers;
