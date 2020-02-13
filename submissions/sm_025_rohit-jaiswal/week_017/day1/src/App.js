import React from 'react';
import Form from './components/Form';
import Cards from './components/Cards';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Form/>
      </header>
      <div className="Container">
      <Cards />
      </div>
    </div>
  );
}

export default App;
