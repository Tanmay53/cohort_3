import React, { Component } from 'react'
import EmployeeTable from './Components/EmployeeTable'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Sagar Kadu',
      age:'25',
      address:'Nagpur',
      department:'tech',
      salary:'125000',
      employeeDB: JSON.parse(localStorage.getItem('employeeTable')),
      btnText:'See Table',
      showTable:false,
      alertText:'Employee Added Successfully !',
      isSubmit:false,
      submit:'Submit',
      submitVisible:true
    }
    console.log('running constructor')
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = (event) =>{
     event.preventDefault()
     let newEmployee = {
       id:Math.random()+1,
       name:this.state.name,
       age:this.state.age,
       address:this.state.address,
       department:this.state.department,
       salary:this.state.salary,
     }

     this.setState({
       employeeDB:[...this.state.employeeDB,newEmployee],
      //  isSubmit:!this.state.isSubmit
     })
     this.componentDidUpdate(this.state.employeeDB)
  }

  handleEditChange = (emp) =>{
    this.setState({
      showTable:!this.state.showTable,
      btnText:(this.state.showTable === true)?'See Table':'Check Form',
      employeeDB:this.state.employeeDB.filter(ele => ele.id !== emp.id),
      name:emp.name,
      age:emp.age,
      address:emp.address,
      department:emp.department,
      salary:emp.salary,
      submit:'Update',
      submitVisible:true, 
    })
  }

  handleDeleteRecord = (emp) =>{
    this.setState({
      showTable:!this.state.showTable,
      employeeDB:this.state.employeeDB.filter(ele => ele.id !== emp.id),
      name:emp.name,
      age:emp.age,
      address:emp.address,
      department:emp.department,
      salary:emp.salary,
      submitVisible:false,
      btnText:'Delete Record'
    })
  }

  handleShowTable = () =>{
    this.setState({
      showTable:!this.state.showTable,
      btnText:(this.state.showTable === true)?'See Table':'Check Form',
      submitVisible:true,
    })      
  }

  componentDidUpdate(prevState){
    if(prevState!== this.state.employeeDB){
      localStorage.setItem('employeeTable',JSON.stringify(this.state.employeeDB))
      console.log('inside component did update',this.state.employeeDB)
    }
  }

  
  render() {

      if(this.state.showTable){
        return (
                  <div className='container'>
                    <button onClick={this.handleShowTable} className='btn btn-secondary mt-2 mt-1'>{this.state.btnText}</button>  
                    <EmployeeTable onEditClick={this.handleEditChange} onDeleteClick={this.handleDeleteRecord}/>
                  </div>
                  )
      }else{
        return  <div className='container shadow mt-5'>
                  <h1>Fill Below Employee Form</h1>
                  <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input type="text" name='name' className="form-control" id="Name" value={this.state.name} onChange={this.handleChange} aria-describedby="emailHelp" required/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="number" className="form-control" id="age" name='age' value={this.state.age} onChange={this.handleChange} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" name='address' value={this.state.address} onChange={this.handleChange} required />
                      </div>
                      <label htmlFor="department">Department</label>
                          <select className="form-control" id="department" name='department' value={this.state.department} onChange={this.handleChange}>
                            <option value='marketing'>marketing</option>
                            <option value='sales'>sales</option>
                            <option value='hr'>human resource</option>
                            <option value='tech'>technical</option>
                          </select>
                    <div className="form-group">
                      <label htmlFor="salary">Salary</label>
                      <input type="number" className="form-control" id="salary" name='salary' value={this.state.salary} onChange={this.handleChange} required />
                    </div>
                      {this.state.submitVisible && <button className="btn btn-primary">{this.state.submit}</button>}
                      {/* <div className="alert alert-success mt-1 fade show" role="alert">
                          {this.state.alertText}
                          <button data-dismiss="alert"  className='alert-dismissible close'>X</button>
                      </div> */}
                  </form>
                 <button onClick={this.handleShowTable} className='btn btn-secondary mt-1 mb-2'>{this.state.btnText}</button>
                </div>
      }
  }
}


