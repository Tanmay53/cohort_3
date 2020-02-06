import React from 'react';
import './App.css';
import Todo from './components/Todo';
import Total from './components/Total';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      inputText:''
    }
  }
  
  render() {
    return (
      <div className="App">
        <div>
            <Todo/>
        </div>
        <Total/>
      </div>
    )
  }

}


export default App
