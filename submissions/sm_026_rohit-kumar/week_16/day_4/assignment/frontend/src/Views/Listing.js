import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Listing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

    }

    fetchData = () => {
        const url = 'http://localhost:5000/user/listing'
        axios.get(url)
        .then(res => {
            // console.log(res.data)
            this.setState({
                users: res.data
            })
        })
    }

    componentWillMount = () => {
        this.fetchData()
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID.</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((item) => {
                            return <tr>
                                        <td>{item['id']}</td>
                                        <td>{item['name']}</td>
                                        <td>{item['mobile']}</td>
                                        <td>{item['email']}</td>
                                        <td><Link to={`/user/address/${item['id']}`}>view address</Link></td>
                                        <td><Link to={`/user/edit/${item['id']}?name=${item['name']}&mobile=${item['mobile']}&email=${item['email']}`}>edit</Link></td>
                                        <td><Link to={`/user/delete/${item['id']}?name=${item['name']}&mobile=${item['mobile']}&email=${item['email']}`}>delete</Link></td>
                                </tr>
                        })}
                    </tbody>
                </table>
                <Link to='/user/create' className='btn btn-primary btn-sm'>Create User</Link>
            </div>
        )
    }
}

export default Listing