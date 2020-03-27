import React from 'react'
import { fetchDataLogin } from '../../redux/action'
import { connect } from 'react-redux'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    login = () => {
        let obj = {
            username: this.state.username,
            password: this.state.password
        }

    }
    render() {
        return (
            <div>

                <h2 className=' text-danger text-center my-5'>LOGIN</h2>
                <div className='card col-6 mx-auto p-5'>
                    <div className='form-group'>
                        <label>Username:</label>
                        <input className='input-group' onChange={this.handleChange} name='username' type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input className='input-group' onChange={this.handleChange} name='password' type='password' />
                    </div>
                    <div className='text-center'>
                        <div onClick={this.login} className='btn btn-primary btn-lg'>LOGIN</div>
                    </div>
                </div>
            </div>
        )
    }
}
// const mapStateToProps = (state) => ({

// })
const mapDispatchToProps = dispatch => {

}

export default connect(null, mapDispatchToProps)(Login)