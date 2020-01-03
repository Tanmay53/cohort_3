import React, { Component } from 'react';
class EmployeeTable extends Component {
    constructor(props){
        super(props);
    }
    deleteEmployee = (e) =>{
      e.preventDefault();
      this.props.deleteEmp(e);
    }
    render() { 
        return ( 
        
            <div className="col table-responsive-sm">
            <table className="table table-sm border">
              <thead className="bg-danger text-light">
                <tr className="">
                  <th className="p-2">Name</th>
                  <th className="p-2">Age</th>
                  <th className="p-2">Department</th>
                  <th className="p-2">Salary</th>
                  <th className="p-2">Address</th>
                  <th className="p-2">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-danger text-light">
                  {this.props.employeeList.map((ele) =>{
                    return (
                      <tr>
                        <td className="p-2">{ele.name}</td>
                        <td className="p-2">{ele.age}</td>
                        <td className="p-2">{ele.department}</td>
                        <td className="p-2">{ele.salary}</td>
                        <td className="p-2">{ele.address}</td>
                        <td className="p-2"><button className="btn btn-warning" id={ele.age} onClick={this.deleteEmployee}>Delete</button></td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        
        );
    }
}
 
export default EmployeeTable;