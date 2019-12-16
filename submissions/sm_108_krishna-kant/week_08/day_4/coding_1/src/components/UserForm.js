import React from 'react';
let employees;
// Setting Employees list with previous data
if (localStorage.getItem('Employees') == undefined) {
  employees = [];
} else {
  employees = JSON.parse(localStorage.getItem('Employees'));
}

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      address: '',
      department: '',
      salary: ''
    };
  }

  //   Handle Input Form Data
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //   When User Submit the Forms
  submitFormData = e => {
    e.preventDefault();
    this.addDatatoServer(
      this.state.name,
      this.state.age,
      this.state.address,
      this.state.department,
      this.state.salary
    );
  };

  //   Adding data to localStorage or Server
  addDatatoServer = (name, age, address, department, salary) => {
    // Creating Employee Object
    let employee = new EmployeeDetails(name, age, address, department, salary);
    // Pushing object to employee list

    employees.push(employee);
    // Convert Employee list to String stream
    let stream = JSON.stringify(employees);
    // Pushing Data to Local Storage
    localStorage.setItem('Employees', stream);
    // Setting Input states to null
    this.setState({
      name: '',
      age: '',
      address: '',
      department: '',
      salary: ''
    });
    this.props.callback();
  };

  //   Rendering the UI
  render() {
    return (
      <form onSubmit={this.submitFormData}>
        <div className='form-group'>
          <label>Name</label>
          <input
            name='name'
            type='text'
            placeholder='Enter Your Name'
            className='form-control'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Age</label>
          <input
            name='age'
            type='text'
            placeholder='Enter Your Age'
            className='form-control'
            value={this.state.age}
            onChange={this.handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Address</label>
          <input
            name='address'
            type='text'
            placeholder='Enter Your Address'
            className='form-control'
            value={this.state.address}
            onChange={this.handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Department</label>
          <select
            name='department'
            value={this.state.department}
            className='form-control'
            onChange={this.handleChange}
          >
            <option>Choose One</option>
            <option value='IT Department'>IT Department</option>
            <option value='Management'>Management</option>
            <option value='Sales Department'>Sales Department</option>
            <option value='Financial Department'>Financial Department</option>
          </select>
        </div>
        <div className='form-group'>
          <label>Salary CTC</label>
          <input
            name='salary'
            type='text'
            placeholder='Enter Your Salary'
            className='form-control'
            value={this.state.salary}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input type='submit' value='Submit Data' className='btn btn-info' />
        </div>
      </form>
    );
  }
}

function EmployeeDetails(name, age, address, department, salary) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.department = department;
  this.salary = salary;
}

export default UserForm;
