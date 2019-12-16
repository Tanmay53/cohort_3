import React from "react"
import Form from "./Form"

class Login extends React.Component{
    constructor(props){
        super(props)
            this.state={
            userCheck:"suryaTeja",
            passwordCheck:"surya472",
            ishided:true,
            content:""
            }
    }
    validate = (user,password)=>{
        
       if (user == this.state.userCheck && password ==this.state.passwordCheck){
           this.setState({
            ishided:!this.state.ishided
        })
        this.setState({
            content:"SIGN-IN SUCESSFUL"
        })
       }
    }
    render(){
        return(
            <div className="container">
            {this.state.ishided && <Form validate={this.validate}/>}
            <h1 className="text-success">{this.state.content}</h1>
            </div>
        )
    }
}
export default Login 