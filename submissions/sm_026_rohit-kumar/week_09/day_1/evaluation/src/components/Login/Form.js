import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username : '',
            password : ''
        }
    }

    handleChange = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        }) 
    }

    handleClick = () => {
        // console.log('username', this.state.username, ' Password : ', this.state.password)
        this.props.callbackValidate(this.state.username, this.state.password)
    }


    render () {
        return (
                <div className='container'>
                    <div>Note : Value user - mohit, password - 1234</div>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='mt-5'>Sign in</h1>
                            <b>Username or Email Address</b>
                            <input name = 'username' onChange = {this.handleChange} value= {this.state.username} className='form-control' type='text'></input>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <b>Password</b>
                        </div>
                        <div className='col-6 text-right'>
                            <a href='#'>Forgot Password</a>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                        <input name = 'password' onChange={this.handleChange} value={this.state.password} className='form-control' type='password'></input>
                        </div>
                    </div>
                    <button onClick={this.handleClick} className='btn btn-primary mt-3'>Sign in</button>
                </div>
        )
    }
}

export default Form