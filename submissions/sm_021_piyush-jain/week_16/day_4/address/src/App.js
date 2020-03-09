import React from 'react';
import './App.css';
import { Link } from "react-router-dom"
import Routes from "./routes/Routes"
import { BrowserRouter } from "react-router-dom"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav class="navbar navbar-dark bg-dark">
            <div><button class="btn btn-primary"><Link to="/list" style={{ "color": "white", "textDecoration": "none" }}>ALL USERS</Link></button></div>
            <h3 style={{ "color": "white" }}><Link to="/home" style={{ "color": "white", "textDecoration": "none" }} class="	d-none d-sm-block"> ADDRESS DIRECTORY</Link></h3>
            <div><button class="btn btn-primary"><Link to="/create" style={{ "color": "white", "textDecoration": "none" }}>CREATE USER</Link></button>
            <button class="btn btn-danger ml-2"><Link to="/list" style={{ "color": "white" }}>LOGOUT</Link></button></div>
          </nav>
          <Routes />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}


export default App;
