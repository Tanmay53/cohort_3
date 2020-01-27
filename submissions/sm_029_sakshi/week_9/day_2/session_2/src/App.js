import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import Navbar from './component/Navbar';
import Routee from './component/Routee';




class App extends Component {
  render() {
   
    return (
      <BrowserRouter>
            <Navbar/>
            <Routee/>
      </BrowserRouter>
    );
  }
}

export default App;