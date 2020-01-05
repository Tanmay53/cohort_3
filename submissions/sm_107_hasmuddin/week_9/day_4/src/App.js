import React, { Component } from "react";
import "./App.css";
import Input from "./components/Todo/Input";
import Todo from "./components/Todo/Todo";
import Completed from "./components/Todo/Completed";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { data } = this.props;
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className=" bg-light shadow col-md-5 col-lg-4 gradient col-12 text-center p-5 m-5">
          <h1>TODO</h1>
          <Input />
          <div className="border border-dark">
            {data.length != 0 ? (
              <h2 className="text-center border bg-dark text-white">
                Todo Work
              </h2>
            ) : null}
            <Todo />
          </div>
          <div className="border border-dark">
            <h3 className="text-center border bg-dark text-white">
              Completed Task{" "}
            </h3>
            <Completed />
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

export default connect(mapStateToProps)(App);
