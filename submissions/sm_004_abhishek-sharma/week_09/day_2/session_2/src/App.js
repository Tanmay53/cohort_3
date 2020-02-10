import React, { Component } from 'react'
import  { Route, Link, BrowserRouter } from "react-router-dom";
import Header from './components/Header'
export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
          <React.Fragment>
            <Header />
          </React.Fragment>
        </div>
        </BrowserRouter>
    )
  }
}
