import React from 'react'
import axios from 'axios'

class Show extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: ''
        }
    }
    componentDidMount = () => {
        // id = this.props.match.p
        const id = this.props.match.params['id']

        axios.get('http://localhost:5000/user/show/' + id)
        .then(res => {
            this.setState({
                userData: JSON.parse(res.data )
            })
        })

    
    }

    render() {
        //console.log(this.state.userData.age)
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Detailed Information.</h3>
                    </div>
                    <div className='col-12'>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Name</b>
                                    </td>
                                    <td>
                                        {this.state.userData.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Email</b>
                                    </td>
                                    <td>
                                        {this.state.userData.email}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Mobile</b>
                                    </td>
                                    <td>
                                        {this.state.userData.mobile}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Age</b>
                                    </td>
                                    <td>
                                        {this.state.userData.age}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-12'>
                        <button onClick={() => this.props.history.push('/user/listing') } className='btn btn-primary'>Go Back</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Show