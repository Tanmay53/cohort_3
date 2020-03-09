import React from 'react'
import axios from 'axios'

class Delete extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleDelete = () => {
        const id = this.props.match.params['id']
        axios.delete('http://localhost:5000/user/delete/' + id)
        this.props.history.push('/user/listing')
    }

    componentDidMount = () => {
        const query = new URLSearchParams(this.props.location.search)
        this.setState({
            name: query.get('name'),
            email: query.get('email'),
            mobile: query.get('mobile'),
            age: query.get('age')
    
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Are you sure ?</h3>
                    </div>
                    <div className='col-12'>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Name</b>
                                    </td>
                                    <td>
                                        {this.state.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Email</b>
                                    </td>
                                    <td>
                                        {this.state.email}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Mobile</b>
                                    </td>
                                    <td>
                                        {this.state.mobile}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Age</b>
                                    </td>
                                    <td>
                                        {this.state.age}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-12'>
                        <button onClick={this.handleDelete} className='btn btn-primary mr-3'>Yes</button>
                        <button onClick={() => this.props.history.push('/user/listing') } className='btn btn-primary mr-3'>No</button>
                        <button onClick={() => this.props.history.push('/user/listing') } className='btn btn-primary mr-3'>Go Back</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Delete