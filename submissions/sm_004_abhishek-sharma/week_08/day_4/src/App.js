import React, { Component } from 'react'
import Form from './components/Form'
import Table from './components/Table'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      database : [],
      editEmp : []
    }
    // var details = []
  }

  // componentDidMount(){
  //   const temp = localStorage.getItem("data")
  //   this.details = JSON.parse(temp)
  //   console.log(this.details, "updated")
  // }

  handleClick = (data) => {
    // console.log(this.state)
    this.setState({ 
      database : [...this.state.database, data] 
    })
    localStorage.setItem('data', JSON.stringify(this.state.data))
  }

  handleDelete = id => {
    // const id = e.target.value
    console.log(id, "delete id")
    let newDetails = [...this.state.database]
    let details = []
    newDetails.forEach(el => el.id !== id?details.push(el):null)
    console.log(details, "after delete")
    this.setState({ database : details })
  }

  handleEdit = (emp) => {
    console.log(emp, "edit this emp")
    this.setState({ editEmp : emp })
  }

  render() {
    console.log(this.state, "database + editEmp")
    return (
      <React.Fragment>
        <Form data = {this.handleClick}
              emp = {this.state.editEmp} />
        {
          this.state.database.length !== 0 ?
            <Table  data = {this.state.database}
                    deleted = {this.handleDelete}
                    edit = {this.handleEdit} />
            : null
        }
        
      </React.Fragment>
    )
  }
}
