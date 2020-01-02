import React, { Component } from 'react'
import Form from './Form'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.username = 'MasaiSchool';
        this.password = 'password';
        this.state = {  
            loginSuccess:false,
        }
    }

    checkIsValid = (input) =>{
        if(input.username === this.username && input.password === this.password){
            this.setState({
                loginSuccess:true
            })
            console.log('entering inside checkIsValid ')
        }else{
            alert('Credentials are invalid')
        }
    }

    render() {
        if(this.state.loginSuccess){
           return <h1 className='container'>Congrats...SIGN-IN SUCCESSFUL !</h1>
        }else{
            return (
                <div >
                    <Form onSubmit={this.checkIsValid} />
                </div>
            )
        }
    }
}
