import React from 'react'
import Form from  './Form'


class Login extends React.Component {
    constructor(props) {
        super(props)

        this.validUser = {'username' : 'mohit', 
                            'password' : '1234'}
        
        this.state = {
            init : true,
            curr_user : '',
            curr_pass : ''
        }
    }

    validate = (username, password) => {
        // console.log('from login : ', username, password)
        this.setState({
            init :false,
            curr_user : username,
            curr_pass : password
        })
    }

    render () {

        if(this.state.init) {
            return ( <Form callbackValidate = {this.validate}/>)
        }
        else {
            if(this.state.curr_user == this.validUser.username && 
                    this.state.curr_pass == this.validUser.password) {
                return (
                    <h1>SIGN-IN SUCESSFUL</h1>
                )
            }
            else{
                return ( <Form callbackValidate = {this.validate}/>)
            }
        }
        
    }
}

export default Login