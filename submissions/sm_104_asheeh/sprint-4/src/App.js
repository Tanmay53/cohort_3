import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Cart from './Components/Product/Cart';
import Slack from './Components/Web/Slack'
function App() {
  return (
            <>
              <Login />
              <br />
              <Cart />
              <br />
              <Slack />
            </>
  );
}

export default App;
