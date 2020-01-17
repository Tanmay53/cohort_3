import React, { Component } from "react";
import "./App.css";
import store from "./store";
import {
  Increment,
  Decrement,
  Addition,
  Subtartion,
  Multi,
  Divide,
  Reminder,
  EvenOdd
} from "./Components/MyRedux/action";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  changeHandler = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div className="App mt-3">
        {/* <div className="bg-dark py-4 m-auto rounded " style={{ width: "25vw" }}>
          <h1 className="text-white display-4">Counter</h1>
          <h1 className="display-2 text-white mt-2">
            {store.getState().count}
          </h1>
          <button
            className="py-2 px-2 mx-2 mt-3 btn text-white bg-success"
            onClick={() => store.dispatch(Increment())}
          >
            Count++
          </button>
          <button
            className="py-2 px-2 mx-2 mt-3 btn text-white bg-success"
            onClick={() => store.dispatch(Decrement())}
          >
            Count--
          </button>
        </div> */}
        {/* ----------------Calculator----------------- */}
        <div
          className="bg-dark py-4 mt-5 mx-auto rounded "
          style={{ width: "35vw" }}
        >
          <h1 className="text-white display-4">Calculator</h1>
          <h1 className="display-2 text-white">{store.getState().count}</h1>
          <div>
            <input
              className="py-1 mb-3 text-info px-2 rounded"
              type="number"
              value={this.state.value}
              onChange={e => this.changeHandler(e)}
            />
          </div>
          <button
            className="py-2 px-2 mx-2 mt-3 btn text-white bg-success"
            onClick={() => store.dispatch(Addition(Number(this.state.value)))}
          >
            Addition
          </button>
          <button
            className="py-2 px-2 mx-2 mt-3 btn text-white bg-success"
            onClick={() => store.dispatch(Subtartion(Number(this.state.value)))}
          >
            Subtract
          </button>
          <button
            className="py-2 px-2 mx-2 mt-3 btn text-white bg-success"
            onClick={() => store.dispatch(Multi(Number(this.state.value)))}
          >
            Multiply
          </button>
          <button
            className="py-2 px-2 mx-2 mt-3 btn text-white bg-success"
            onClick={() => store.dispatch(Divide(Number(this.state.value)))}
          >
            Divde
          </button>
          <button
            className="py-2 px-2 mx-2 mt-3 btn text-white bg-success"
            onClick={() => store.dispatch(EvenOdd(Number(this.state.value)))}
          >
            Even/Odd
          </button>
          <button
            className="py-2 px-2 mx-2 mt-3 btn text-white bg-success"
            onClick={() => store.dispatch(Reminder(Number(this.state.value)))}
          >
            Reminder
          </button>
        </div>
      </div>
    );
  }
}

export default App;
