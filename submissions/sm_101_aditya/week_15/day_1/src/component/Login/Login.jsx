import React from "react";
import Form from "./Form";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    username: "admin",
                    password: "admin",
                    isDone: false
        };
    }

    validityChecker = (username, password) => {
        var flag = false;
            if (this.state.username == username && this.state.password == password) {
                flag = true;
                this.setState({
                    isDone: true
                });
                return true;
            }
        if (flag === false)
            alert("Wrong Input");
    };
    render() {
        return (
            <div>
                    {this.state.isDone ? (
                        <p className="text-center display-3">"sign In successfully" </p> 
                    ) : (
                        <Form validityChecker = {this.validityChecker} />
                    )}
            </div>
        );
    }
}

export default Login;