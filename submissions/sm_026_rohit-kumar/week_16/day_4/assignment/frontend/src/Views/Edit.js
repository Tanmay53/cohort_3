import React from 'react'
import axios from 'axios'

class Edit extends React.Component {
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
        const user_id = this.props.match.params['user_id']
        const url = 'http://localhost:5000/user/edit/' + user_id
        axios.put(url, {
            "name": this.state.name,
            "email": this.state.email,
            "mobile": this.state.mobile
        })
        .then(res => {
           this.history.push('/listing') 
        })

        console.log(this.state)
    }

    componentWillMount = () => {
        const query = new URLSearchParams(this.props.location.search)
        const name = query.get('name')
        const email = query.get('email')
        const mobile = query.get('mobile')

        this.setState ({
            name: name,
            email: email,
            mobile: mobile
        })
    }

    render() {
        return (
            <table>
                <tr>
                    <td>User id: </td>
                    <td>
                        <b>{this.props.match.params['user_id']}</b>
                    </td>
                </tr>
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
                        <button onClick={this.handleClick} className='btn btn-primary'>Update</button>
                    </td>
                </tr>
            </table>
        )
    }
}
export default Edit