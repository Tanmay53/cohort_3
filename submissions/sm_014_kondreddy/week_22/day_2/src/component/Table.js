import React from "react"
class Table extends React.Component {
    
render() {
    console.log(this.props.data)
    return (
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Source</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Bus Number</th>
                    <th scope="col">schedule</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
            {this.props.data.map((arr) => {
                            return (<tr key={arr.id}>
                                <td>{arr.source}</td>
                                <td>{arr.destination}</td>
                                <td>{arr.busnumber}</td>
                                <td>{arr.schedule}</td>
                                <td><button onClick={() => this.props.onDeleteClick(arr)} className='btn btn-sm btn-outline-danger'>Delete</button></td>
                                <td><button onClick={() => this.props.onEditClick(arr)} className='btn btn-sm btn-outline-primary'>Edit</button></td>
                            </tr>
                            )
                        })}
            </tbody>
        </table>                  


    )
}
}
export default Table