import React from 'react'
import { Link } from "react-router-dom"
import Router from './Routers/Router';
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div className="container ">
        <div className="col-12 d-flex justify-content-center">
          <Link to="/"><button className="btn btn-primary">Home</button></Link>
        </div>
        <Router />
      </div>
    )
  }
}
export default App