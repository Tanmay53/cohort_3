import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Routes from './Routes';
// import axios from 'axios';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
