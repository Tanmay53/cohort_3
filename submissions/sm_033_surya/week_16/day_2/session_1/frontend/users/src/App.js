import React from 'react';
import { Link } from 'react-router-dom'
import Router from './routers/Router';

function App() {
  return (
    <div className="App">
      <div className="container text-center p-5">
      <div className="row">
      <div className="col-6">
      <Link to ="/">Home</Link>
      </div>
      <div className="col-6">
      <Link to ="/create">Add user</Link>
      </div>
      </div>
      </div>
      <Router />
    </div>
  );
}

export default App;
