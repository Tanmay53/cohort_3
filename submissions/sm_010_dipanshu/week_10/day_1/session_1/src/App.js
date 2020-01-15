import React from "react";
import {
  increment,
  decrement,
  incrementEven,
  incrementOdd,
  multiply,
  divide,
  modulus
} from "./redux/actions";
import store from "./redux/store";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: ""
    };
  }

  handleInput = event => {
    let input = event.target.value;

    this.setState({
      num: input
    });
  };

  handleClick = event => {
    let input = this.state.num;
    let validInput = input === "" ? this.alertUser() : true;

    if (validInput) {
      input = Number(input);
      let btnClicked = event.target.id;
      switch (btnClicked) {
        case "incXBtn":
          store.dispatch(increment(input));
          break;

        case "decXBtn":
          store.dispatch(decrement(input));
          break;

        case "incBtn":
          if (input % 2 === 0) {
            store.dispatch(incrementEven());
          } else {
            store.dispatch(incrementOdd());
          }
          break;

        case "mulBtn":
          store.dispatch(multiply(input));
          break;

        case "divBtn":
          store.dispatch(divide(input));
          break;

        case "modBtn":
          store.dispatch(modulus(input));
          break;

        default:
          break;
      }

      this.setState({
        num: ""
      });
    }
  };

  alertUser = () => {
    alert("Please enter a valid value");
    return false;
  };

  render() {
    return (
      <div className="container mt-5 shadow shadow-lg p-5 rounded border border-dark">
        <input
          type="number"
          className="form-control col-2 mx-auto shadow shadow-lg border border-dark text-center"
          placeholder="Enter number"
          onChange={this.handleInput}
          value={this.state.num}
        ></input>
        <div className="row mt-5">
          <button
            className="btn btn-dark mx-auto"
            id="incXBtn"
            onClick={this.handleClick}
          >
            Increment
          </button>
          <button
            className="btn btn-dark mx-auto"
            id="decXBtn"
            onClick={this.handleClick}
          >
            Decrement
          </button>
          <button
            className="btn btn-dark mx-auto"
            id="incBtn"
            onClick={this.handleClick}
          >
            Increment (Odd/Even)
          </button>
          <button
            className="btn btn-dark mx-auto"
            id="mulBtn"
            onClick={this.handleClick}
          >
            Multiply
          </button>
          <button
            className="btn btn-dark mx-auto"
            id="divBtn"
            onClick={this.handleClick}
          >
            Divide
          </button>
          <button
            className="btn btn-dark mx-auto"
            id="modBtn"
            onClick={this.handleClick}
          >
            Modulus
          </button>
        </div>
        <div className="mt-5 text-dark text-center display-3">
          <p>Count : {store.getState()}</p>
        </div>
      </div>
    );
  }
}

export default App;
