import React, { Component } from 'react';
import './App.css';
import UserSearch from './components/UserSearch';

class App extends Component {
  constructor(){
    super()
  }

  render(){
    // console.log(this.state)
    return (
      <div className="App">
        <UserSearch />
      </div>
  )}
}

export default App;
