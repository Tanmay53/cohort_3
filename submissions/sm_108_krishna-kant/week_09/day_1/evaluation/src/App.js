import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Product from './Components/Product/Product';
import Uber from './Components/Web/Uber';
function App() {
  // Uncomment Each Module One By One to Check
  return (
    <div className='App'>
      {/* <Login /> */}
      {/* <Product /> */}
      <Uber />
    </div>
  );
}

export default App;
