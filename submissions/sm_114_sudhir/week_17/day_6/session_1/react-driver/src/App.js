import React, { Component } from "react";
import "./index.css";
import Home from './components/common/Home'
import Login from './components/common/Login'
import SignUp from './components/common/SignUp'
import Navbar from './components/common/Navbar'

import { Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component = {Home} />
        <Route path="/login" component = {Login} />
        <Route path="/signup" component = {SignUp} />
      </React.Fragment>
    );
  }
}

export default App;
