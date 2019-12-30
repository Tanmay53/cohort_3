import React from "react";
import store from "./Redux/Store";
import {
  incrementCounter,
  decrementCounter,
  multiplyCounter,
  divideCounter,
  moduloCounter,
  checkCounter
} from "./Redux/Action";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0
    };
  }
  render() {
    return (
      <div className="App">
        <h1>{store.getState().count}</h1>
        <input
          type="text"
          value={this.state.input}
          onChange={e => this.setState({ input: e.target.value })}
        />
        <hr />
        <button
          onClick={() =>
            store.dispatch(incrementCounter(parseInt(this.state.input)))
          }
        >
          ADD
        </button>
        <button
          onClick={() =>
            store.dispatch(decrementCounter(parseInt(this.state.input)))
          }
        >
          SUBTRACT
        </button>
        <button
          onClick={() =>
            store.dispatch(multiplyCounter(parseInt(this.state.input)))
          }
        >
          MULTIPLY
        </button>
        <button
          onClick={() =>
            store.dispatch(divideCounter(parseInt(this.state.input)))
          }
        >
          DIVIDE
        </button>
        <button
          onClick={() =>
            store.dispatch(moduloCounter(parseInt(this.state.input)))
          }
        >
          MODULUS
        </button>
        <button onClick={() => store.dispatch(checkCounter())}>CHECK</button>
      </div>
    );
  }
}

export default App;
