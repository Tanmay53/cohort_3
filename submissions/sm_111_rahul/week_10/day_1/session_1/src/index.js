/** @format */
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import counter from "./reducer";
import {
  incrementCounter,
  decrementCounter,
  multiplyCounter,
  divideCounter,
  remainderCounter
} from "./action";

const store = createStore(counter);

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      num: "",
      valueFlag: false,
      numFlag: false
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
      numFlag: false,
      valueFlag: true
    });
  };
  handleChange1 = e => {
    let x = e.target.value;
    x % 2 == 0 ? (x = 2) : (x = 1);
    this.setState({
      num: x,
      valueFlag: false,
      numFlag: true
    });
  };

  submit1 = e => {
    e.preventDefault();
    if (this.state.numFlag == true) {
      store.dispatch(incrementCounter(Number(this.state.num)));
    }
    if (this.state.valueFlag == true) {
      store.dispatch(incrementCounter(Number(this.state.value)));
    }
  };
  submit2 = e => {
    e.preventDefault();
    if (this.state.numFlag == true) {
      store.dispatch(decrementCounter(Number(this.state.num)));
    }
    if (this.state.valueFlag == true) {
      store.dispatch(decrementCounter(Number(this.state.value)));
    }
  };

  submit3 = e => {
    e.preventDefault();
    if (this.state.valueFlag == true) {
      store.dispatch(multiplyCounter(Number(this.state.value)));
    }
  };
  submit4 = e => {
    e.preventDefault();
    if (this.state.valueFlag == true) {
      store.dispatch(divideCounter(Number(this.state.value)));
    }
  };
  submit5 = e => {
    e.preventDefault();
    if (this.state.valueFlag == true) {
      store.dispatch(remainderCounter(Number(this.state.value)));
    }
  };
  render() {
    return (
      <div className="container m-4 p-3 text-center border">
        Count : {store.getState().count}
        <div className="row justify-content-center">
          <form onSubmit={this.submit1}>
            <label htmlFor="val">Enter the Increment/Decrement factor</label>
            <input
              type="text"
              placeholder="factor"
              className="form-control"
              id="val"
              onChange={e => this.handleChange(e)}
            ></input>
            <br></br>
            <label htmlFor="val">
              Increment/Decrement by 1 if odd, 2 if even
            </label>
            <input
              type="text"
              className="form-control"
              id="val1"
              placeholder="enter the number"
              onChange={e => this.handleChange1(e)}
            ></input>
            <button className="btn btn-dark m-2" type="submit">
              Increment
            </button>
            <button className="btn btn-dark m-2" onClick={this.submit2}>
              Decrement
            </button>
            <button className="btn btn-dark m-2" onClick={this.submit3}>
              Multiply by factor
            </button>
            <button className="btn btn-dark m-2" onClick={this.submit4}>
              Divide by factor
            </button>
            <button className="btn btn-dark m-2" onClick={this.submit5}>
              Remainder if divided by factor
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);
