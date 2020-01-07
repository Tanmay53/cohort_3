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

    validity = (username, password) => {
        var flag = false;
            if (this.state.username == username && this.state.password == password) {
                flag = true;
                this.setState({
                    isDone: true
                });
                return true;
            }
        if (flag === false)
            alert("Something Wrong!! try Again");
    };
    render() {
        return (
            <div>
                    {this.state.isDone ? (
                        <p className="text-center display-3">"You Are successfully sign In" </p> 
                    ) : (
                        <Form validity = {this.validity} />
                    )}
            </div>
        );
    }
}

export default Login;
