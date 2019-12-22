import React from 'react';
import './App.css';
import Login from "./components/Login/Login"
import Product from "./components/Product/Product"
import Uber from "./components/Web/Uber"

function App() {
  return (
    <div>
      <div className="container">
        <h1>Sign in:</h1>
      </div>
      <Login />
      <div className="container">
        <hr></hr>
        <h1>Product</h1>
        <Product />
      </div>
      <hr></hr>
      <Uber />
    </div>
  );
}

export default App;
