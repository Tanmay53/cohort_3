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
            <button><Link to="/list">Go To All Users Section ---></Link></button>
            <button><Link to="/create">Go To All Users Section ---></Link></button>
            <Routes/>
          </div>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}


export default App;
