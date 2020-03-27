import React, { Component } from 'react'
    
class Table extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.data)
        return (
            <div>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">EmployeeName</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Department</th>
                            <th scope="col">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((obj) => {
                                return (<tr key={obj.id}>
                                            <td>{obj.empname}</td>
                                            <td>{obj.gender}</td>
                                            <td>{obj.department}</td>
                                            <td>{obj.salary}</td>  
                                        </tr>)
                                    }
                            )}
                    </tbody>
                </table>                   
            </div>
        )
    }
}

export default Table
