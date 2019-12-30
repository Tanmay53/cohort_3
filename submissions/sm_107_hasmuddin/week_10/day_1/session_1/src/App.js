import React, { Component } from "react";
import { createStore } from "redux";
import counter from "./redux/Reducer";
import {
  incrementCounter,
  decrementCounter,
  oddEvenCounter,
  multiplier,
  divider,
  remainder
} from "./redux/Action";
let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(this.handleChange);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  handleChange = () => {
    this.forceUpdate();
  };

  changeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(store.getState());
    return (
      <div className="text-center ">
        <div>
          <h4>Counter</h4>
          {/* counter by 1 */}
          <button
            onClick={() => store.dispatch(incrementCounter())}
            className="btn btn-dark mx-1"
          >
            Increment by one
          </button>
          <button
            onClick={() => store.dispatch(decrementCounter())}
            className="btn btn-dark mx-1"
          >
            Decrement by one
          </button>
          <h1 className="display-1 p-5 font-weight-bolder text-center">
            {store.getState().count}
          </h1>
        </div>
        <br />
        {/* input box  */}
        <input onChange={this.changeInput} type="number" name="number" />
        <br />
        <button
          className="btn btn-dark m-1"
          onClick={() =>
            store.dispatch(oddEvenCounter(parseInt(this.state.number)))
          }
        >
          Odd Even Counter
        </button>
        <button
          onClick={() =>
            store.dispatch(multiplier(parseInt(this.state.number)))
          }
          className="btn btn-dark m-1"
        >
          Multiply by X
        </button>
        <button
          onClick={() => store.dispatch(divider(parseInt(this.state.number)))}
          className="btn btn-dark m-1"
        >
          Divide by X
        </button>
        <button
          onClick={() => store.dispatch(remainder(parseInt(this.state.number)))}
          className="btn btn-dark m-1"
        >
          Remainder
        </button>
        <h1 className="display-1 p-5 font-weight-bolder text-center">
          {store.getState().number}
        </h1>
      </div>
    );
  }
}

export default App;
