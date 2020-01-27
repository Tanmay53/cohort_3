import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            passw: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = () => {
        this.props.callback(this.state)
    }
    render() {
        return (
            <div className='col-6 m-5 p-5'>
                <form onSubmit={this.handleSubmit}>
                    <h1>Sign in</h1>
                    <div className='my-5'>
                        <div className='form-group'>
                            <h5>Username or Email Address</h5>
                            <input name='email' value={this.state.email} onChange={this.handleChange} className='form-control' type='text' />
                        </div>
                        <div className='form-group'>
                            <h5>Password</h5>
                            <input name='passw' value={this.state.passw} onChange={this.handleChange} className='form-control' type='text' />
                        </div>
                    </div>
                    <div className='col-4' style={{ background: '#E3408C' }} >
                        <input className='btn text-white col-12' type='submit' value='SIGN IN' style={{ background: '#E3408C', border: '1px solid E3408C', color: 'white', fontWeight: 'bold' }} />
                    </div>
                </form>
            </div>
        )
    }

}

export default Form