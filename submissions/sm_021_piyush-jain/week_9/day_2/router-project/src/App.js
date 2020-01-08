import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import './components/Comp.css'
import Navbar from './components/Navbar'

export default class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <div>
        <React.Fragment>
          <Navbar/>
        </React.Fragment>
      </div>
      </BrowserRouter>
    )
  }
};
