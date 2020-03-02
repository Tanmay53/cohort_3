import React from 'react'
import axios from 'axios'

class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            mobile: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    handleClick = () => {
        axios.post('http://localhost:5000/user/create', {
            name: this.state.name,
            email: this.state.email,
            mobile:this.state.mobile
        })
        this.props.history.push('/user/listing')
    }

    render() {
        return (
            <table>
                <tr>
                    <td>Name: </td>
                    <td>
                        <input name="name" onChange={this.handleChange} value={this.state.name} type='text' className='form-control'></input>
                    </td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td>
                        <input name="email" onChange={this.handleChange} value={this.state.email} type='text' className='form-control'></input>
                    </td>
                </tr>
                <tr>
                    <td>Mobile: </td>
                    <td>
                        <input name="mobile" onChange={this.handleChange} value={this.state.mobile} type='text' className='form-control'></input>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button onClick={this.handleClick} className='btn btn-primary'>Add User</button>
                    </td>
                </tr>
            </table>
        )
    }
}
export default Create