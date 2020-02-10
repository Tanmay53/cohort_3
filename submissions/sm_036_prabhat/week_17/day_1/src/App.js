import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
// import Login from './components/auth/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
