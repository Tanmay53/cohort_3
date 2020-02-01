import React, { Component } from 'react'
import GroceriesTable from './components/GroceriesTable'
import Add from './components/Add'

export default class App extends Component {
  render() {
    return (
      <div>
        <Add/>
        <br />
        <GroceriesTable/>
      </div>
    )
  }
}
