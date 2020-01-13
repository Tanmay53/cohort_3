import React from 'react';
import Login from './component/Login/Login';
import Cart from "./component/product/Cart"
import Display from "./component/web/Display"
import './App.css';

function App() {
  return (
    <div>
      <Login />
      <Cart />
      <Display />
    </div>
  );
}

export default App;
