import React from 'react';
import logo from './logo.svg';
/* import './App.css'; */
import Os from './component/os'
import Manufecturers from './component/manufacturer'


function App() {
  var os = ['Android', 'Blackberry', 'iPhone', 'Window Phone']
  var manufacturer = ['Samsung', 'HTC', 'Micromax', 'Apple']

  return (
    <div className="App">
      <header className="App-header">
        <Os value = {os} />
        <Manufecturers value = {manufacturer} />
      </header>
    </div>
  );
}

export default App;
