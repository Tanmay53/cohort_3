import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Address extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            addresses: [],
            line_1: '',
            line_2: '',
            city: '',
            pincode: ''
        }
    }

    fetchData = () => {
        const user_id = this.props.match.params['user_id']
        const url = 'http://localhost:5000/address/listing/' + user_id
        axios.get(url)
        .then(res => {
            console.log(res.data)
            this.setState({
                addresses: res.data
            })
        })
    }

    componentWillMount = () => {
        this.fetchData()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDelete = (addr_id) => {
        const user_id = this.props.match.params['user_id']
        axios.get(`http://localhost:5000/address/delete/${user_id}/${addr_id}`)
    }

    handleClick = () => {
        const user_id = this.props.match.params['user_id']
        const url = 'http://localhost:5000/address/add/' + user_id
        axios.post(url, {
            "line_1": this.state.line_1,
            "line_2": this.state.line_2,
            "city": this.state.city,
            "pincode" : this.state.pincode
        })
        .then(res => {
            this.fetchData()
        })
    }

    render() {
        return (
            <div>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID.</th>
                                <th>Line 1</th>
                                <th>Line 2</th>
                                <th>City</th>
                                <th>Pincode</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                            {this.state.addresses.map((item) => {
                                return <tr>
                                            <td>{item['id']}</td>
                                            <td>{item['line_1']}</td>
                                            <td>{item['line_2']}</td>
                                            <td>{item['city']}</td>
                                            <td>{item['pincode']}</td>
                                            <td><Link onClick={() => this.handleDelete(item['id'])}>delete</Link></td>
                                            <td><Link to={`/user/address_edit?user_id=${this.props.match.params['user_id']}&addr_id=${item['id']}&line_1=${item['line_1']}&line_2=${item['line_2']}&city=${item['city']}&pincode=${item['pincode']}`}>edit</Link></td>
                                        </tr>
                            })}
                        <tbody>

                        </tbody>
                    </table>
                </div>
                <div>
                    <table className='table'>
                        <tr>
                            <td>Address Line 1</td>
                            <td>
                                <input name="line_1" value={this.state.line_1} onChange={this.handleChange} type='text' className='form-control'></input>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Address Line 2</td>
                            <td>
                                <input name="line_2" value={this.state.line_2} onChange={this.handleChange} type='text' className='form-control'></input>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <input name="city" value={this.state.city} onChange={this.handleChange} type='text' className='form-control'></input>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Pincode</td>
                            <td>
                                <input name="pincode" value={this.state.pincode} onChange={this.handleChange} type='text' className='form-control'></input>
                            </td>
                            
                        </tr>

                    </table>
                    <button onClick={this.handleClick} className='btn btn-primary btn-sm'>Add Address</button>
                </div>
            </div>
        )
    }
}

export default Address