import React from 'react'
import axios from 'axios'

class EditAddress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: '',
            addr_id: '',
            line_1: '',
            line_2: '',
            city: '',
            pincode: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }
    
    handleClick = () => {
        console.log('state before sending', this.state)

        const url = 'http://localhost:5000/address/edit'
        axios.put(url, {
            "user_id": this.state.user_id,
            "addr_id": this.state.addr_id,
            "line_1": this.state.line_1,
            "line_2": this.state.line_2,
            "city": this.state.city,
            "pincode": this.state.pincode
        })
        
        this.props.history.push('/user/listing')
    }

    componentWillMount = () => {
        const query = new URLSearchParams(this.props.location.search)
        const user_id = query.get('user_id')
        const addr_id = query.get('addr_id')
        const line_1 = query.get('line_1')
        const line_2 = query.get('line_2')
        const city = query.get('city')
        const pincode = query.get('pincode')

        this.setState ({
            user_id: user_id,
            addr_id: addr_id,
            line_1: line_1,
            line_2: line_2,
            city: city,
            pincode: pincode
        })
    }

    render() {
        return (
            <table>
                <tr>
                    <td>User id: </td>
                    <td>
                        <b>{this.state.user_id}</b>
                    </td>
                </tr>
                <tr>
                    <td>Line_1: </td>
                    <td>
                        <input name="line_1" onChange={this.handleChange} value={this.state.line_1} type='text' className='form-control'></input>
                    </td>
                </tr>
                <tr>
                    <td>Line_2: </td>
                    <td>
                        <input name="line_2" onChange={this.handleChange} value={this.state.line_2} type='text' className='form-control'></input>
                    </td>
                </tr>
                <tr>
                    <td>City: </td>
                    <td>
                        <input name="city" onChange={this.handleChange} value={this.state.city} type='text' className='form-control'></input>
                    </td>
                </tr>
                <tr>
                    <td>Pincode: </td>
                    <td>
                        <input name="pincode" onChange={this.handleChange} value={this.state.pincode} type='text' className='form-control'></input>
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
export default EditAddress