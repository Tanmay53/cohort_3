import React, { Component } from "react";
import InputIncome from "../Components/InputIncome";
import ShowIncome from "../Components/ShowIncome";
import { connect } from "react-redux";

class AddData extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center pt-3">
          Welcome, Hello {this.props.userLoginInfo.fName}{" "}
          {this.props.userLoginInfo.lName} Your Total Balance:{" "}
          {this.props.totalBal} INR
        </h1>
        <div className="row">
          <div className="col-md-3 ">
            <InputIncome />
          </div>
          {/* ----------------------------Show Data---------------------------- */}
          <div className="col-md-9 ">
            <div>
              <ShowIncome />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  totalBal: state.totalBal,
  userLoginInfo: state.userLoginInfo
});

export default connect(mapStateToProps)(AddData);
