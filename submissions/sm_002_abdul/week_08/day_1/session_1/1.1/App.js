import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

import MobileOs from './components/MobileOs'
import MobileManu from './components/MobileManu'

function App() {
  return (
    <div>
      <MobileOs/>
      <MobileManu/>
    </div>
  );
}

export default App;

ReactDOM.render(<App/>,document.getElementById('root'))
