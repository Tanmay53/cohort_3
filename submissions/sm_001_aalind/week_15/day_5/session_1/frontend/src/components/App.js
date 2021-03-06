import React, { Component } from 'react';
import Routes from './Routes';
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
