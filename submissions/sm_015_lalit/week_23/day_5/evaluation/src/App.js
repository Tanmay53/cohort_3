import React from 'react';
import './App.css';
import Routes from './components/Routes'
import Navbar from "./components/common/Navbar"
function App() {
  return (
    <div>
      <Navbar/>
      <Routes/>
    </div>
  );
}

export default App;
