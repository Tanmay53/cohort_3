import React from 'react';
import './App.css';
import store from './store'
import {ActionCreator} from './action'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      number:0
    }
  }


  render(){

    const count = store.getState().count
    //console.log(count)
    console.log('in app.js file',this.state.number)

    return(
      <div className="App">
        <header className="App-header">

          <h5>Count : {count}</h5>

          <input
            type="number"
            placeholder="Enter A Number"
            onChange={(event)=>this.setState({number:event.target.value})}/>

          <hr/>

          <button
            onClick={()=>store.dispatch(ActionCreator(this.state.number))}>
            Set Counter
          </button>

        </header>
      </div>
    )
  }
    
}

export default App;
