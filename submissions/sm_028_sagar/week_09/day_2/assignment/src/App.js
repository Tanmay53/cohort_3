import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter} from 'react-router-dom'
import Footer from './Components/Footer'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Footer />
      </BrowserRouter>
    )
  }
}
