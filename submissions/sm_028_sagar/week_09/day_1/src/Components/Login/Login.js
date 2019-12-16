import React from 'react'
import Form from './Form'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.username='masaischool';
        this.password='masai';
        this.state={
            status:'false'
        }
    }

    checkCredentials = (username,password) =>{

        console.log(username,password)
        console.log(this.username,this.password)

        if(username === this.username && password === this.password){
            this.setState({
                status:true
            })
        }else{
            this.setState({
                status:false
            })
        }
        console.log(this.state.status)
        this.LoginForm()
    }

    LoginForm = () =>{
        if(this.state.status === true){
            return (
                        <div className='container'>
                            <div className='row'>
                            <div className='row-3'></div>
                            <div className='row-6'>
                                <h1>Sign In Successfull</h1>
                            </div>
                            <div className='row-3'></div>
                            </div>
                        </div>
            )
        }else{
            return(
                        <Form onCredentialChange={this.checkCredentials} />
            )
        }
    }

    render(){
        return(
                <div>
                    {this.LoginForm()}
                </div>
        )
    }
}


export default Login