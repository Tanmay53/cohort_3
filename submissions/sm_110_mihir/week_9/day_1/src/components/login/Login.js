import React, { Component } from "react";
import Form from "./Form";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDB: [
                {
                    username: "mihir",
                    password: "secret"
                },
                {
                    username: "masai",
                    password: "school"
                }
            ],
            isValid: false
        };
    }

    checkLogin = (username, password) => {
        let flag = false;
        console.log("check:", username, password);
        this.state.userDB.forEach(ele => {
            console.log(ele);
            if (ele.username === username && ele.password === password) {
                flag = true;
                this.setState({
                    isValid: true
                });
                return true;
            }
        });
        if (flag === false)
            alert("OOPs!! Please use correct username and password ");
    };
    render() {
        return (
            <div className="login">
                <h1 className="text-center">Login Page</h1>

                <div>
                    {this.state.isValid ? (
                        "SIGN-IN SUCESSFUL"
                    ) : (
                        <Form checkLogin={this.checkLogin} />
                    )}
                </div>
            </div>
        );
    }
}

export default Login;
