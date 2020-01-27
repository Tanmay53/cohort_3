import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom"
import Rounter from './Rounting/Rounter';

function App() {
  return (
    <div>
      <div className="container-fliud border border-primary m-5 d-flex rounded-pill  justify-content-center">
        <div className="row">
          <div className="my-3">
            <Link to="/">Home</Link>
          </div>
          <div className="m-3">
            <Link to="/history">History</Link>
          </div>
        </div>
      </div>
      <Rounter />
    </div>
  );
}

export default App;
