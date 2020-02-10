import React, { Component } from 'react'
// var emp_ar = []
export class Forms extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arr: [],
      form: {
        fullName: "",
        age: "",
        inputAddress: "",
        salary: "",
        department: ""
      }
    }
  }
  inputChange = (e) => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }
  Click = (e) => {
    e.preventDefault()
    const { fullName, age, inputAddress, salary, department } = this.state.form
    if (fullName == "" || age == "" || inputAddress == "" || salary == "" || department == "") {
      alert("Input field mandatory to fill Corret data")
    }
    else {
      var empData = JSON.parse(localStorage.getItem("data"))
      if (empData == null) {
        empData = []
      }

      empData.push(this.state.form);


      localStorage.setItem("data", JSON.stringify(empData))
    }
  }
  render() {
    var all_data = JSON.parse(localStorage.getItem("data"))
    console.log(all_data)
    return (
      <div className="container-fluid">
        <form className="border border-info m-5 p-5">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="fullName">Full Name :</label>
              <input onChange={this.inputChange} type="text" className="form-control" id="fullName" name="fullName" placeholder="First Name and Last Name" />
            </div>
            <div className="form-group col-md-6">
              <label for="age">Age</label>
              <input type="Number" onChange={this.inputChange} className="form-control" id="age" name="age" />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" className="form-control" onChange={this.inputChange} id="inputAddress" name="inputAddress" placeholder="Permanent Address" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="salary">Salary</label>
              <input type="Number" className="form-control" onChange={this.inputChange} id="salary" name="salary" placeholder="Per Month" />
            </div>
            <div className="form-group col-md-4">
              <label for="department">Department</label>
              <select id="department" name="department" onChange={this.inputChange} className="form-control">
                <option selected>Front End developer</option>
                <option>Backend Developer</option>
              </select>
            </div>

          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" for="gridCheck">
                Check me out
      </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.Click}>Submit</button>
        </form>
        <div>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Address</th>
                <th scope="col">Department</th>
                <th scope="col">Salary</th>
              </tr>
            </thead>
            <tbody>
              {all_data && all_data.map((ele, i) => {
                return (
                  <tr key={ele.fullName}>
                    <th scope="row">{i + 1}</th>
                    <td>{ele.fullName}</td>
                    <td>{ele.age}</td>
                    <td>{ele.inputAddress}</td>
                    <td>{ele.salary}</td>
                    <td>{ele.department}</td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Forms;
