import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginForm from './components/login/login'
import PVR from './components/web/pvr'
import Product from './components/product/product'

function App() {
  return (
    <div className ='container-fluid'>
      <div className = 'row'>
        <div className = 'col-4 m-auto'>
        <LoginForm/>
        </div>
      </div>
      <div className='container-fluid my-4'>
        <Product/>
        </div>
        <PVR/>
    
       
       
    </div>
  
   
  );
}

export default App;
