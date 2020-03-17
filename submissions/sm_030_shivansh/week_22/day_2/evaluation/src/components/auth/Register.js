import React from 'react'
import { connect } from 'react-redux'
import { fetchDataRegister } from '../../redux/action'
import { Link } from 'react-router-dom'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = () => {
        this.props.fetchDataRegister(this.state)
    }
    render() {
        return (
            <div>
                <h1 className='text-center my-5 text-danger'> Admin Registration</h1>
                {this.props.registerStatusError == false ?
                    <Link to='/'><div className='btn btn-success'>Login Now</div></Link> :
                    <p></p>
                }
                <div className='card col-md-6  mx-auto p-5 container' >
                    <div className='form-group'>
                        <label>Name:</label>
                        <input className='input-group' onChange={this.handleChange} name='name' type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Email:</label>
                        <input className='input-group' onChange={this.handleChange} name='email' type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Username:</label>
                        <input className='input-group' onChange={this.handleChange} name='username' type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input className='input-group' onChange={this.handleChange} name='password' type='password' />
                    </div>


                    <div className='text-center'>
                        <div onClick={this.handleSubmit} className='btn btn-primary'>Register</div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        registerStatusError: state.registerStatus.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataRegister: (a) => dispatch(fetchDataRegister(a))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)   