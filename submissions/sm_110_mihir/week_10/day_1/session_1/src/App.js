import React, { Component } from "react";
import store from "./components/Store";
import {
    incrementCounter,
    decrementCounter,
    oddEvenIncrement,
    multiply,
    divide,
    modulus
} from "./components/Action";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
    }
    render() {
        const item = store.getState().count;
        console.log(item);
        return (
            <div>
                <h1>Redux Counter </h1>
                <input
                    type="Number"
                    onChange={e => this.setState({ input: e.target.value })}
                    placeholder="Enter a number"
                />
                <button
                    onClick={() =>
                        store.dispatch(
                            incrementCounter(Number(this.state.input))
                        )
                    }
                >
                    Increment
                </button>
                <button
                    onClick={() =>
                        store.dispatch(
                            decrementCounter(Number(this.state.input))
                        )
                    }
                >
                    Decrement
                </button>
                <button
                    onClick={() =>
                        store.dispatch(
                            oddEvenIncrement(Number(this.state.input))
                        )
                    }
                >
                    ODD/EVEN increment
                </button>
                <button
                    onClick={() =>
                        store.dispatch(multiply(Number(this.state.input)))
                    }
                >
                    Multiply
                </button>
                <button
                    onClick={() =>
                        store.dispatch(divide(Number(this.state.input)))
                    }
                >
                    Divide
                </button>
                <button
                    onClick={() =>
                        store.dispatch(modulus(Number(this.state.input)))
                    }
                >
                    Modulus
                </button>
                <h1>Couter:{item}</h1>
            </div>
        );
    }
}

export default App;
