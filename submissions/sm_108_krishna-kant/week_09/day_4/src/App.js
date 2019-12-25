import React from 'react';
import Todo from './components/todo';
import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      <Todo />
    </div>
  );
}

export default App;
