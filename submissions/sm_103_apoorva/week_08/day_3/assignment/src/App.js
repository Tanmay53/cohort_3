import React from 'react';
import './App.css';
import Stop from './stopwatch/Stop'
import Time from './Timer/Time'
function App() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Stop />
        </div>
        <div className="col">
          <Time />
        </div>
      </div>
    </div>
  );
}

export default App;
