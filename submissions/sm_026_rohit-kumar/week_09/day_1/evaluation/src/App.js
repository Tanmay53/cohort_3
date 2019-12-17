import React from 'react';
import Login from './components/Login/Login'
import Product from './components/Product/Product'
import Uber from './components/Web/Uber'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Login/>
      <Product/>
 
      </header>
      <Uber/>
    </div>
  );
}

export default App;
