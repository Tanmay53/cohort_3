import React from "react";
import Form from './Form'

class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            username:"Surya",
            password:"1994",
            showLabel:false

        }
    }
    userdata=(username,password)=>{
        if(username == this.state.username && password == this.state.password){
            this.setState({
                showLabel: !this.state.showLabel
            })
        }
    }
    render(){
        return(
            <div className="container"><h1>Login</h1>
               {!this.state.showLabel && <Form  userdata ={this.userdata}/>} 
                {this.state.showLabel && <h1 style={{color:"green"}}>SIGN-IN SUCCESSFUL</h1>}
            </div>
        )
    }
}

export default Login