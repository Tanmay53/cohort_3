import React, { Component } from 'react'
import {add, increment, decrement, multiply, divide } from './action/action';
import store from './redux/store'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: ''
    }
  }

  handelChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handelSubmit = () => {
    store.dispatch(add(Number(this.state.number)))
  }

  render() {
    console.log(store.getState())
    return (
      <div>
        <form style={{padding: 10}} >
          <label>
            Number :
              <input style={{padding: 10}}  type="number" name="number" value={this.state.number} onChange={this.handelChange} placeholder="Enter Some Number" />
          </label>
        </form>
          <button style={{marginLeft:50 , padding : 10}}  onClick = {this.handelSubmit}> Submit</button>
        <h1> Count :{store.getState().count}</h1>
        <h1>
          <button style={{marginLeft:50 , padding : 10}} onClick={() => store.dispatch(increment(Number(this.state.number)))} >Increment</button>
          <button style={{marginLeft:50 , padding : 10}} onClick={() => store.dispatch(decrement(Number(this.state.number)))} >Decrement</button>
        </h1>
        <h1>
          <button style={{marginLeft:50 , padding : 10}} onClick = {()=>store.dispatch(multiply(Number(this.state.number)))}>Multiply</button>
          <button style={{marginLeft:50 , padding : 10}} onClick = {()=>store.dispatch(divide(Number(this.state.number)))}>Divide</button>
        </h1>
      </div>
    )
  }
}

export default App;
