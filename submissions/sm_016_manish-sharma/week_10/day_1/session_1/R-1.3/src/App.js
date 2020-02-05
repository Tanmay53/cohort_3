import React from 'react';
import './App.css';
import store from './redux/store'
import {mul,div,rem, add} from "./redux/actions";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={  
      input:0,
      ss:0
    }
  }
  add=()=>{
    store.dispatch(add(this.state.input))
  }
  mutiply=()=>{
    store.dispatch(mul(this.state.input))
  }
  divide=()=>{
    store.dispatch(div(this.state.input))
  }
  reminder=()=>{
    store.dispatch(rem(this.state.input))
  }
  changeHandler=(e)=>{
    this.setState({
      input:e.target.value,
    })
  }

  render() {
    let cnt=store.getState().count
    let ops = store.getState().ops
    // console.log('cnt', cnt, 'ops', ops  )
    return (
      <div className="App text-center">
        <div className='m-4'>
          <input type='number' onChange={this.changeHandler} />
          <button onClick={this.add}>Increment</button>
        </div>
        
        <div className='d-flex my-2 offset-4'>
          <button onClick={this.mutiply}>Mutiply</button>
          <button onClick={this.divide}>divide</button>
          <button onClick={this.reminder}>find reminder</button>
        </div>
        <div className='h4 my-4'>
          Conditional Counter:<div>{cnt}</div>
          <br></br>
          Integer after operations: {ops}
        </div>
      </div>
    )
  }

}

export default App
