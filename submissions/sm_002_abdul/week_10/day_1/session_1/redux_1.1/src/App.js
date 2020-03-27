import React from 'react';
import './App.css';
import store from './store'
import {increment,decrement} from './action'

class App extends React.Component {
  render(){

    const count = store.getState().count
    console.log(count)

    return(
      <div className="App">
        <header className="App-header">

          <h5>Count : {count}</h5>

          <button
            onClick={()=>store.dispatch(increment())}>
            Increment
          </button>

          <hr/>

          <button
            onClick={()=>store.dispatch(decrement())}>
            Decrement
          </button>

        </header>
      </div>
    )
  }
    
}

export default App;
