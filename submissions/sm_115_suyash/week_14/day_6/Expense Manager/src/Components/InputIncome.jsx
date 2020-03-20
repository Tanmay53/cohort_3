import React, { Component } from "react";
import { connect } from "react-redux";
import { addIncomeData, addExpenseData } from "../redux/action";

class InputIncome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      incomeSource: "",
      income: 0,
      expenseName: "",
      expense: 0
    };
  }

  changeInputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitIncome = e => {
    e.preventDefault();
    if (this.state.incomeSource != "" && this.state.income != 0) {
      let obj = {
        incomeSource: this.state.incomeSource,
        income: this.state.income
      };
      this.props.addIncomeData(obj);
    } else {
      alert("Fill all input field");
    }
    this.setState({
      incomeSource: "",
      income: 0
    });
  };

  submitExpense = e => {
    e.preventDefault();
    if (this.state.expenseName != "" && this.state.expense != 0) {
      let obj = {
        expenseName: this.state.expenseName,
        expense: this.state.expense
      };
      this.props.addExpenseData(obj);
    } else {
      alert("Fill all input field");
    }
    this.setState({
      expenseName: "",
      expense: 0
    });
  };
  render() {
    return (
      <>
        <div className="text-center border w-100 py-4 bg-light mt-3">
          <h3>Add Income</h3>
          <form>
            <div>
              <div className="text-left">
                <label className="mb-0 pb-1 ml-5">Income Source</label>
              </div>
              <input
                className=" px-2"
                type="text"
                name="incomeSource"
                value={this.state.incomeSource}
                onChange={e => this.changeInputHandler(e)}
              />
            </div>
            <div>
              <div className="text-left">
                <label className="mb-0 py-1 ml-5">Income</label>
              </div>
              <input
                className=" px-2"
                type="number"
                name="income"
                value={this.state.income}
                onChange={e => this.changeInputHandler(e)}
              />
            </div>
            <div>
              <button
                className="btn w-50 text-white py-2 bg-dark mt-3"
                type="submit"
                onClick={this.submitIncome}
              >
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="text-center w-100 py-4 mt-3 border rounded bg-light">
          <h3>Add Expense</h3>
          <form>
            <div>
              <div className="text-left">
                <label className="mb-0 py-1 ml-5">Expense name</label>
              </div>
              <input
                className=" px-2"
                type="text"
                name="expenseName"
                value={this.state.expenseName}
                onChange={e => this.changeInputHandler(e)}
              />
            </div>
            <div>
              <div className="text-left">
                <label className="mb-0 py-1 ml-5">Expense</label>
              </div>
              <input
                className=" px-2"
                type="number"
                name="expense"
                value={this.state.expense}
                onChange={e => this.changeInputHandler(e)}
              />
            </div>
            <div>
              <button
                className="btn w-50 text-white py-2 bg-dark mt-3"
                type="submit"
                onClick={this.submitExpense}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addIncomeData: payload => dispatch(addIncomeData(payload)),
  addExpenseData: payload => dispatch(addExpenseData(payload))
});

export default connect(null, mapDispatchToProps)(InputIncome);
