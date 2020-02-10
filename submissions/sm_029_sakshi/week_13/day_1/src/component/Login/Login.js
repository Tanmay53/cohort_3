import React, { Component } from 'react';
import Form from './Form';


class Login extends Component {
    constructor(props){
        super(props)
       
       // console.log(this.email)
       // console.log(this.password)
        this.state = {  
            loginsuccessfull:false,
        }
    }

    validuser = (newvalue) => {
        console.log(newvalue.email)
        console.log(newvalue.password)
        if(newvalue.email === "admin" && newvalue.password === 'admin'){
            console.log(newvalue.email)
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

export default Login;