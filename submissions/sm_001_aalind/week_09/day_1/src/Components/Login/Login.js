import React from "react"
import Form from "./Form"

var login = {
    username: "aalind",
    password: "password"
}

class Login extends React.Component {
    checkDetails = (obj) => {
        if(obj.username === login.username && obj.password === login.password) {
            alert("SIGN-IN SUCESSFUL")
        } else {
            alert("FAILED!!")
        }
    }
    
    render() {
        return (
            <Form formSubmit={this.checkDetails} />
        )
    }
}

export default Login