import React from 'react';
import './App.css';
import store from './store'
import {ActionCreator} from './action'

class App extends React.Component {
 


  render(){

    const count = store.getState().count
    
    console.log("count in app",count)
    
    return(
      <div className="App">
        <header className="App-header">

          <h5>Count : {count}</h5>

          <hr/>

          <button 
            data-operations="MULTIPLY"
            onClick={(event)=>store.dispatch(ActionCreator(event.target.dataset.operations))}        
            >
            MULTIPLY
          </button>

          <hr/>

          <button 
            data-operations="DIVIDE"
            onClick={(event)=>store.dispatch(ActionCreator(event.target.dataset.operations))}        
            >
            DIVIDE
          </button>

          <hr/>

          <button 
            data-operations="REMAINDER"
            onClick={(event)=>store.dispatch(ActionCreator(event.target.dataset.operations))}
            >
            REMAINDER
          </button>

        </header>
      </div>
    )
  }
    
}

export default App;
