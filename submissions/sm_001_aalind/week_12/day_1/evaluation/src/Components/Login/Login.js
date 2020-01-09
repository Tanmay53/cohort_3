import React, {Component} from "react";
import Form from "./Form";
import Product from "../Product/Product"

class Login extends Component {
    constructor(props) {
        super(props);
        this.username = "aalind";
        this.password = "12345";
        this.state = {
            loginSuccess: false,
            showTable: false
        }
    }

    validateUser = (user) => {
        // console.log(this.username, this.password)
        if(user.username === this.username && user.password === this.password) {
            window.localStorage.setItem("username", JSON.stringify(user.username));

            this.setState({
                loginSuccess: true
            })
        } else {
            alert("Invalid Credentials")
        }
    }

    logoutHandler = () => {
        window.localStorage.clear()
        
        this.setState({
            loginSuccess: false
        });
    }

    UNSAFE_componentWillMount = () => {
        if(localStorage.getItem("username")) {
            this.setState({
                loginSuccess: true
            })
        }
    }

    render() {
        return (
            <div>
                {
                    (this.state.loginSuccess) ? (
                        <div>
                            <h1>SIGN-IN SUCCESSFUL</h1>
                            <h2 style={{display: "inline-block", marginRight: "10px"}}>Welcome {this.username}</h2>
                            <button onClick={this.logoutHandler}>Logout</button>
                            <Product />
                        </div>
                    ) : (
                        <div>
                            <h1>Login</h1>
                            <Form validateUser={this.validateUser} />
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Login