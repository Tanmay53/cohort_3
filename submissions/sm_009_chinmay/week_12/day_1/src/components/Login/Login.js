import React from 'react'
import Form from './Form'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            start: true,
            username_to_check: '',
            password_to_check: '',
        }
        this.validUser={
            username: "admin",
            password: "admin"
        }
    }

    userValidation = (username, password) => {
        this.setState({
            start: false,
            username_to_check: username,
            password_to_check: password
        })
        console.log('userValidation called')
    }

    render(){
        console.log(this.state.start)
        
        if(this.state.start){
            return (<React.Fragment>
                <Form doUserValidation={this.userValidation}/>
            </React.Fragment>)
        }
        else{
            if(this.state.username_to_check===this.validUser.username && this.state.password_to_check===this.validUser.password){
                return (
                    <h1 className='text-center' style={{color:'green'}}>SIGN-IN SUCCESSFUL</h1>
                )
            }
            else{
                return (
                    <React.Fragment>
                        <Form doUserValidation={this.userValidation} />
                        {alert('Not a valid user!!')}
                        <p className='mx-auto col-4' style={{color:'red'}}>Enter correct credentials!!</p>
                    </React.Fragment>
                )
            }
        }
    }

}

export default Login