import React from 'react';                      
import {Link} from 'react-router-dom'
import Router from './Routers/Router';
import  Registration  from './common/Registration';

function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <div className="row">
          <div className="col-6 p-5">
      <Link to = '/'>Home</Link>
      </div>
      <div className="col-6 p-5">
      <Link to = '/orders'>Orders</Link>
      </div>
      </div>
      </div>
      <Router />
    </div>
  );
}

export default App;
