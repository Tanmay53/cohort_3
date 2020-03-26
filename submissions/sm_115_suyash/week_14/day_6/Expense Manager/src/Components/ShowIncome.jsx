import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class ShowIncome extends Component {
  render() {
    return this.props.isAuth ? (
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-md-5 col-sm-12 mt-3 w-100 bg-light border text-center pb-3">
            <h3 className="pt-4">Show Income List</h3>
            <table className="table table-striped table-bordered m-auto">
              <thead className="t">
                <tr>
                  <th scope="col">S No.</th>
                  <th scope="col">Income Type</th>
                  <th scope="col">Income</th>
                </tr>
              </thead>
              <tbody>
                {this.props.userIncomeData.map((item, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{item.incomeSource}</td>
                      <td>
                        {item.income}
                        Rs
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-md-1"></div>
          {/* ---------------------------Expense List----------------------------- */}
          <div className="col-md-5 col-sm-12 mt-3 w-100 bg-light border text-center pb-3">
            <h3 className="pt-4">Show Expense List</h3>
            <table className="table table-striped table-bordered m-auto">
              <thead>
                <tr>
                  <th scope="col">S No.</th>
                  <th scope="col">Expense Type</th>
                  <th scope="col">Expense</th>
                </tr>
              </thead>
              <tbody>
                {this.props.userExpanseData.map((item, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{item.expenseName}</td>
                      <td>{item.expense}Rs</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

const mapStateToProps = state => ({
  userIncomeData: state.userIncomeData,
  userExpanseData: state.userExpanseData,
  isAuth: state.isAuth
});

export default connect(mapStateToProps)(ShowIncome);
