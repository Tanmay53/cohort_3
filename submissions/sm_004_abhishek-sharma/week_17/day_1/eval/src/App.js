import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from './routes/Routes'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
