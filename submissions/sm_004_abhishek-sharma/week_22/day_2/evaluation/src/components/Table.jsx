import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.emp,
            gender: "all",
            department: "all",
            sort: "asc" 
        }
    }

    handleSort = (e) => {
        const type = e.target.value;
        console.log(type);
        let sortedData = [...this.state.data];
        if (type === "asc")
          sortedData = sortedData.sort((a, b) => a.salary - b.salary);
        else 
            sortedData = sortedData.sort((a, b) => b.salary - a.salary);
        this.setState({ 
          data: sortedData, 
          sort: type 
        });
    }
    handleDept = (e) => {
        console.log(e.target.value, "dept");
        const dept = e.target.value;
        if(dept === "all"){
          this.setState({ 
            department: "all",
            data: this.props.emp
          })
        }
        else{
          let deptData = [...this.props.emp];
          let newData = deptData.filter((item) => item.department === dept)
          this.setState({
             data: newData,
             dept: dept 
          })
        }
    }
    handleGender = (e) => {
      console.log(e.target.value, "gender");
      const gender = e.target.value;
      this.setState({ gender: gender });
      if(gender === "all"){
        this.setState({  
          gender: "all",
          data: this.props.emp 
        })
      }
      else{
        let genderData = [...this.props.emp];
        let newData = genderData.filter((item) => item.gender === gender)
        this.setState({ 
          data: newData,
          gender: gender
        })
      }
    }
  render(){
    const details = this.state.data
    console.log(details, "details")
    return(
      <React.Fragment>
        <div className="container">
          <div className="form-group row">
              {/* Filter based on Department */}
              <div className="col-4">
                  <div className="input-group mb-3">
                      <div className="input-group-prepend">
                      <label className="input-group-text">Filter</label>
                      </div>
                      <select className="custom-select" onChange={this.handleGender}>
                          <option value="all">All Gender</option>
                          <option value = "Male">Male</option>
                          <option value = "Female">Female</option>
                          <option value = "Can't Say">Can't Say</option>
                      </select>
                  </div>
              </div>
              {/* Filter based on Gender */}
              <div className="col-4">
                  <div className="input-group mb-3">
                      <div className="input-group-prepend">
                      <label className="input-group-text">Filter</label>
                      </div>
                      <select className="custom-select" onChange={this.handleDept}>
                          <option value="all">All Dept</option>
                          <option value="IT">IT</option>
                          <option value="HR">HR</option>
                          <option value="Developer">Developer</option>
                          <option value="Back-End">Back-End</option>
                          <option value="Front-End">Front-End</option>
                      </select>
                  </div>
              </div>
              {/* Sort based on salary */}
              <div className="col-4 ">
                  <div className="input-group mb-3">
                      <div className="input-group-prepend">
                      <label className="input-group-text">Salary Sort</label>
                      </div>
                      <select className="custom-select" onChange={this.handleSort}>
                      <option value="asc">Ascending</option>
                      <option value="dec">Descending</option>
                      </select>
                  </div>
              </div>
          </div>
      </div>
      <div className="container">
          <div className="row">
            <div className="col">
                {/* Table */}
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Department</th>
                    <th scope="col">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                  </tr>
                  {(details.length > 0)
                    ?
                    details.map(el => {
                      return (
                        <tr key={el.id}>
                          <td className = "text-capitalize">{el.name}</td>
                          <td>{el.gender}</td>
                          <td>{el.department}</td>
                          <td>{el.salary}</td>
                        </tr>
                      );
                    })
                  :null
                  }
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
    
}

const mapStateToProps = (state) => ({
    emp : state.adminReducer.empList,
})

export default connect(mapStateToProps, null)(Table)
