import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter } from "react-router-dom"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
