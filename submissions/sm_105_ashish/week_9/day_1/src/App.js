import React from 'react';
//import logo from './logo.svg';
import './App.css';
import LoginForm from './components/login/login'
import Uber from './components/web/uber'

function App() {
  return (
    <div className ='container-fluid'>
      <div className = 'row'>
        <div className = 'col-4 m-auto'>
        <LoginForm/>
        </div>
      </div>
      <div>
      <Uber/>
      </div>
       
       
    </div>
  
   
  );
}

export default App;
