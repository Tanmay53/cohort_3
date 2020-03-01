import React from 'react'

function Tabpart(props){
    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.age}</td>
        <td>{props.address}</td>
        <td>{props.department}</td>
        <td>{props.salary}</td>
        <td><button onClick={props.delete}>Delete</button></td>
        <td><button onClick={props.edit}>Edit</button></td>
      </tr> 
    )
}

class Table extends React.Component{
    render(){
        return(
            <div>
                <select onChange={this.props.performFilter} className="offset-5">
                    <option value="--">--Select--</option>
                    <option value="all">All</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="CSE">CSE</option>
                    <option value="MECH">MECH</option>
                    <option value="CIVIL">CIVIL</option>
                </select>
                <select onChange={this.props.performSort}>
                    <option value="--">--Select--</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select> 
                <div className="container">
                    <table className="table thead-dark table-responsive col-10 offset-0 col-md-8 col-lg-8 offset-2 table-dark mt-2">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Department</th>
                                <th>Salary</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.tabdata.map(element=> <Tabpart key={element.name} name={element.name} age={element.age}
                            address={element.address} department={element.department} salary={element.salary} 
                            delete={()=>this.props.performDelete(element.name)}
                            edit={()=>{this.props.performEdit(element.name)}}
                            />)}
                        </tbody>
                    </table> 
                </div>
            </div>
        )
    }
}
export default Table