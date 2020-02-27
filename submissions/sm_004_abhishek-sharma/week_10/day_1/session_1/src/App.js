import React, { Component } from 'react'
import store from './redux/store'
import {incrementCounter, decrementCounter, incrementIfOddEven, multiply, divide, remainder} from './redux/action'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x : ""
    }
  }

  render() {
    console.log(store.getState(), "render")
    return (
      <div className = "container">
        <div className = "row my-2 text-center">
          <div className = "col">
            <h1>Count : {store.getState().count}</h1>
          </div>
        </div>
        <div className = "row my-2">
          <div className = "col d-flex justify-content-center">
            <input type = "text" onChange = {(e) => this.setState({x : e.target.value})} placeholder ="Enter the value of X " />
          </div>
        </div>
        <div className = "row my-2">
          <div className = "col-4">
            <button type="button" className = "btn btn-outline-dark" onClick={() => store.dispatch(incrementCounter(Number(this.state.x)))}>
              Increment by X
            </button>
          </div>
          <div className = "col-4">
            <button  type="button" className = "btn btn-outline-dark" onClick={() => store.dispatch(decrementCounter(Number(this.state.x)))}>
              Decrement by X
            </button>
          </div>
          <div className = "col-4">
            <button  type="button" className = "btn btn-outline-dark" onClick={() => store.dispatch(incrementIfOddEven(Number(this.state.x)))}>
              Increment If Odd/Even
            </button>
          </div>
        </div>
        <div className = "row my-2">
          <div className = "col-4">
            <button  type="button" className = "btn btn-outline-dark" onClick={() => store.dispatch(multiply(Number(this.state.x)))}>
              Multiply by X
            </button>
          </div>
          <div className = "col-4">
            <button  type="button" className = "btn btn-outline-dark" onClick={() => store.dispatch(divide(Number(this.state.x)))}>
              Divide by X
            </button>
          </div>
          <div className = "col-4">
            <button  type="button" className = "btn btn-outline-dark" onClick={() => store.dispatch(remainder(Number(this.state.x)))}>
              Remainder by X
            </button>
          </div>
        </div>
      </div>
    )
  }
}
