import React from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Stopwatch />
        <Timer />
      </header>
    </div>
  );
}

export default App;
