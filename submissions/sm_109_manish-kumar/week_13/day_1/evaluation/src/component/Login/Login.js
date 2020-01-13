import React, { Component } from 'react'
import Form from "./Form"
import ReactDOM from "react-dom"

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username :"admin",
             password :"admin",
        }
    }
    validate = (username, password) =>{
        if(this.state.username === username && this.state.password === password){
           const ele =  (<h3>Your are Successfully Login</h3>)
           ReactDOM.render(ele, document.getElementById("show"))
        }
        else{
           const ele = (<h3>Oops!!! Something Wrong! Try Again</h3>)
           ReactDOM.render(ele, document.getElementById("show"))
        }
        
    }
    
    render() {
        return (
            <div id ="show">
                <Form validate = {this.validate}/>
            </div>
        )
    }
}

export default Login
