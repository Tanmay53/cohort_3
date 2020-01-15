import React from 'react'
import Form from  './Form'


class Login extends React.Component {
    constructor(props) {
        super(props)

        this.validUser = {
            'username' : 'username', 
            'password' : 'password'
        }
        
        this.state = {
            flag : true,
            currentUser : '',
            currentPassword : ''
        }
    }

    validate = (username, password) => {
        this.setState({
            flag :false,
            currentUser : username,
            currentPassword : password
        })
    }

    render () {

        if(this.state.flag) {
            return ( <Form authenticate = {this.validate}/>)
        }
        else {
            if(this.state.currentUser === this.validUser.username && 
                    this.state.currentPassword === this.validUser.password) {
                return (
                    <h1 className = "my-5 text-center">SIGN-IN SUCESSFUL</h1>
                )
            }
            else{
                alert("Invalid Login!")
                return ( <Form authenticate = {this.validate}/>)
            }
        }
        
    }
}

export default Login