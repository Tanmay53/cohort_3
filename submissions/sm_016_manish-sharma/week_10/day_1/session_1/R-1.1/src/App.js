import React from 'react';
import './App.css';
import store from './redux/store'
import {inc,dec} from "./redux/actions";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={  
      input:0
    }
  }
  increment=()=>{
    store.dispatch(inc(this.state.input))
  }
  decrement=()=>{
    store.dispatch(dec(this.state.input))
  }
  changeHandler=(e)=>{
    this.setState({
      input:e.target.value
    })
  }

  render() {
    let count = store.getState().count
    console.log('cnt', count)
    return (
      <div className="App">
        <div className='row'>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
        <input type='number' onChange={this.changeHandler} />
        <div className='display-4'>
          {count}
        </div>
      </div>
    )
  }

}

export default App
