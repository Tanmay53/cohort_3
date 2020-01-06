import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <h1>Mobile Operating System</h1>
        <ul>
          <li>Andriod</li>
          <li>Blackberry</li>
          <li>iPhone</li>
          <li>Windows Phone</li>
        </ul>
      </div>
      <div>
        <h1>Mobile Manufacturers</h1>
        <ul>
          <li>Samsung</li>
          <li>HTC</li>
          <li>Micromax</li>
          <li style={{listStyleType:'circle'}}>Apple</li>
        </ul>
      </div> 
    </div>
  );
}

export default App;
