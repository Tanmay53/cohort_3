import React from 'react'

class Table extends React.Component{
  render(props){
    return (
          <div>
            <table className='table table-striped' style={{marginTop:'10px'}}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              {this.props.filteredData.map(el=>{
              return (
                    <tr key={el.id}>
                      <td>{el.name}</td>
                      <td>{el.age}</td>
                      <td>{el.address}</td>
                      <td>{el.department}</td>
                      <td>{el.salary}</td>
                      <td>
                        <button
                          className='btn btn-primary' 
                          id={el.id} 
                          onClick={this.props.delete}>Delete
                        </button>
                      </td>
                    </tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
              )
            })}
            </tbody>
          </table>
        </div>
    )
  }
}

export default Table