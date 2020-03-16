import React from 'react'
import axios from 'axios'

class Delete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            mobile: ''
        }
    }

    handleClick = () => {
        const user_id = this.props.match.params['user_id']
        const url = 'http://localhost:5000/user/delete/' + user_id
        axios.get(url)
        
        // delete associate addresses
        axios.get('http://localhost:5000/address/delete/' + user_id)
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
                        {this.state.name}
                    </td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td>
                        {this.state.email}
                    </td>
                </tr>
                <tr>
                    <td>Mobile: </td>
                    <td>
                        {this.state.mobile}
                    </td>
                </tr>
                <tr>
                    
                    <td>
                        <button onClick={this.handleClick} className='btn btn-primary'>Delete</button>
                    </td>
                    <td></td>
                </tr>
            </table>
        )
    }
}
export default Delete