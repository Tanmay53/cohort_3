import React, { Component } from 'react'
import Form from "./Form"
import ReactDOM from "react-dom"

export default class Login extends Component {
    constructor(props){
        super(props)

        this.state= {
            username: "Asheesh",
            password:"aps123"
            
        }
    }
    authentication = (e) => {
        e.preventDefault();
        let inputUsername= document.getElementById("exampleInputEmail1").value
        let inputPassword= document.getElementById("exampleInputPassword1").value
        // alert(inputPassword)
        if(this.state.username === inputUsername && this.state.password === inputPassword)
        {
            const elem = (
                <h1 className="text-center text-success">Sign in successful</h1>
            )
            ReactDOM.render(elem, document.getElementById("loginDiv"))
        }
        else
        {
            alert("Enter valid credentials")
        }
    }
// to update the value of username and password
    
    render() {
        return (
            <div id="loginDiv">
                <Form check = {this.authentication} />
            </div>
        )
    }
}
