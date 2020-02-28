import React from 'react'
class Table extends React.Component{
    render(){
        return(
            <tr>
            <td>{this.props.name}</td>
            <td>{this.props.age}</td>
            <td>{this.props.address}</td>
            <td>{this.props.department}</td>
            <td>{this.props.salary}</td>
            </tr> 
        )
    }
}
export default Table