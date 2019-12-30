import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Table from './Components/Table';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showTable: false,
      submit: true,
      inputData: []
    }
  }
  datafromForm = (data) => {
    this.setState({
      inputData: data
    })
  }
  check = (id) => {
    // console.log("surya")
    if (id == true) {
      this.setState({
        submit: false
        // showTable: false
      })
    }
    else {
      this.setState({
        submit: true
        // showTable: false
      })
    }
  }

  render() {
    console.log(this.state.showTable, "table")
    console.log(this.state.submit, "app")
    return (
      <div className="container">
        <Form check={this.check} />
        {this.state.submit && <Table datafromForm={this.datafromForm} deletedData={this.deletedData} check={this.check} />}
      </div>
    )
  }
}

export default App;
