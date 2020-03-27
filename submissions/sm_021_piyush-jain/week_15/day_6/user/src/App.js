import React from 'react';
import { Link, BrowserRouter } from "react-router-dom"
import Routes from "./Routes"
import './App.css';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <div>
            <nav class="navbar navbar-dark bg-dark">
              <button class="btn btn-outline-light"><Link to="/list" style={{ "textDecoration": "none" }}>View Users</Link></button>
              <h3 class="text-white text-center"><Link to="/list" style={{ "textDecoration": "none", "color": "white" }}>USER DB</Link></h3>
              <button class="btn btn-outline-light"><Link to="/create" style={{ "textDecoration": "none" }}>Add Users</Link></button>
            </nav>
            <Routes />
          </div>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}


export default App;
