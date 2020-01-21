import React from 'react'
import Form from './Form';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'admin',
            password:'admin',
            login:false
        }
    }
    handleSubmit=(data)=>{
        console.log(data)
        if(this.state.name===data.email && this.state.password===data.passw){
            this.setState({
                login:true
            })
        }
        else{
            alert('"Your Email or Password is wrong. Try again!"')
        }
    }
    render(){
        if(this.state.login===false){
            return(
                <div>
                    <Form callback={this.handleSubmit} />
                </div>
            )
        }
        else{
            return(
                <div>
                    <div className='display-1 text-success'>CONGRATULATIONS!!!</div>
                    <div className='display-3 text-primary'>SIGN-IN SUCCESSFUL</div>
                </div>
            )
        }
    }
}

export default Login