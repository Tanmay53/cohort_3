import React, { Component } from 'react'
import axios from 'axios'
import moduleName from 'module'

export default class UsersListings extends Component {
    constructor(props) {
        super(props)
        this.state = {
             users: []
        }
    }

    updateUesers = () => {
        axios
            .get('http://127.0.0.1:5000/users/listing')
            .then(res => {
                const list = res.data.users
                this.setState({
                    users: list
                })
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.updateUesers()
    }
    
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Users Table</h1>
                <div className="row">
                    <div className="col">
                        <table class="table table-borderless rounded table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Age</th>
                                    <td scope="col">Details</td>
                                    <td scope="col">Edit</td>
                                    <td scope="col">Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.map(item => {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.age}</td>
                                            <td>
                                                <button className="btn btn-outline-light">Show User</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-outline-light">Edit User</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-outline-light">Delete User</button>
                                            </td>

                                        </tr>
                                    )
                                })}
                                <tr> </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
