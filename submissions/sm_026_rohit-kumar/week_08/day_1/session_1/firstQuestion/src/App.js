import React from 'react';
import logo from './logo.svg';
/* import './App.css'; */
import Os from './components/os'
import Manufacturer from './components/manufacturer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Os/>
       <Manufacturer />
      </header>
    </div>
  );
}

export default App;
