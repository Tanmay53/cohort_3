import React from 'react'
import {Link} from 'react-router-dom'

class Table extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <table className='table'>
                <thead>
                    <tr>
                        <th>ID.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Show</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((user) => {
                        return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.age}</td>
                                    <td><Link to={`/user/edit/${user.id}?name=${user.name}&email=${user.email}&mobile=${user.mobile}&age=${user.age}`}>edit</Link></td>
                                    <td><Link to={`/user/delete/${user.id}?name=${user.name}&email=${user.email}&mobile=${user.mobile}&age=${user.age}`}>delete</Link></td>
                                    <td><Link to={`/user/show/${user.id}`}>show</Link></td>
                                    
                            </tr>
                    })}
                </tbody>
            </table>
        )
    }
}

export default Table