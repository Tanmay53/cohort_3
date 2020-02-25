import React from 'react';
import Routers from './routers/Routers';
import {Link } from 'react-router-dom'
import './components/cssfile.css'

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="row text-center p-3">
        <div className="col-6">
      <Link to="/">Home</Link>
      </div>
      <div className="col-6">
      <Link to = "create" >ADD USER</Link>
      </div>
      </div>
      </div>
      <Routers />
    </div>
  );
}

export default App;
