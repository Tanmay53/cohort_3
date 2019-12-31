import React from "react";
import Form from './Form';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "masai",
            password: "school",
            loginSuccess: false
        }
    }

    checkLogin = () => {
        this.setState({
            loginSuccess: true
        })
    }

    render() {

        if (!this.state.loginSuccess) {
            return (
                <div>
                    <Form data={this.state} function={this.checkLogin} />
                </div>
            )
        }
        else {
            return (
                <div className="container m-5">
                    <div className="text-success display-3 text-center">Login Success</div>
                </div>
            )
        }
    }
}
export default Login
