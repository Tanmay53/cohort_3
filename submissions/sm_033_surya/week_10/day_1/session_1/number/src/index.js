import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import counter from "./reducer";
import { incrementCounter, decrementCounter, initiate, odd, multiply, divide, reminder } from "./action"

const store = createStore(counter);

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            num: ""
        }
    }
    handlesubmit = (e) => {
        this.setState({
            num: Number(e.target.value)
        })
    }
    render() {
        console.log(this.state.num)
        return (
            <>
                Count : {store.getState().count}
                <input value={this.state.num} onChange={this.handlesubmit} />
                <button onClick={() => store.dispatch(initiate(this.state.num))}>Submit</button>
                <button onClick={() => store.dispatch(incrementCounter(this.state.num))}>Increment</button>
                <button onClick={() => store.dispatch(decrementCounter(this.state.num))} >Decrement</button>
                <button onClick={() => store.dispatch(odd())} >ODD</button>
                <button onClick={() => store.dispatch(multiply(this.state.num))} >MULTIPLY</button>
                <button onClick={() => store.dispatch(divide(this.state.num))} >DIVIDE</button>
                <button onClick={() => store.dispatch(reminder(this.state.num))} >REMINDER</button>
            </>
        )
    }
}

const rootElement = document.getElementById("root")
const render = () => ReactDOM.render(<App />, rootElement)
render()
store.subscribe(render)