import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes/Routes'

export default class App extends Component {

  render(){
    return (
      <div>
        <BrowserRouter>
            <Routes></Routes>
        </BrowserRouter>
      </div>
    )
  }
  
}
