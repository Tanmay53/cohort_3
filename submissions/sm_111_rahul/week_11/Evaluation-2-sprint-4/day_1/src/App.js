import React from 'react';
import './App.css';
import Login from './Components/Login/Login.js'
import Pvr from './Components/Web/PVR.js'
import Product from './Components/Product/product.js'
function App() {
  return (
    <div className="App">
      <div className="container">
         <Login />
      </div>
      <div className="fluid ">
         <Pvr />
      </div>
      <div className="fluid">
         <Product />
      </div>
    </div>
  );
}

export default App;
