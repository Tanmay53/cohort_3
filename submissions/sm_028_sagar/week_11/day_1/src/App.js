import React, { Component } from 'react'
import Login from './Components/Login'
import Product from './Components/Product'

export default class App extends Component {
 
  render() {
    return (
      <div>
          <Login />
          <br/>
          <Product />
      </div>
    )
  }
}
