import React, { Component } from 'react'
import Form from './Form'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.email = 'Sakshi@gmail.com';
        this.password = '12345';
       // console.log(this.email)
       // console.log(this.password)
        this.state = {  
            loginsuccessfull:false,
        }
    }

    validuser = (input) =>{
        
        if(input.email === this.email && input.password === this.password){
            console.log(input.email)
            this.setState({
                loginsuccessfull:true
            })
    
        }else{
            alert('this is not a valid id please try again ')
        }
        
    }

    render() {
        if(this.state.loginsuccessfull===true)
        {
           return <h1 className='container mt-5 border border-dark bg-primary'>SIGN-IN SUCCESSFUL !</h1>
        }
        else{
            return (
                <div >
                    <Form onSubmit={this.validuser} />
                </div>
            )
        }
    }
}
