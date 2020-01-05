import React from 'react';
import Form from './Form';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.fakeUserDetails = [{username: "ryder", password: "inspiron"},
                                {username: "knight", password: "onepiece"},
                                {username: "hero", password: "academia"}];
        this.state = {
            validLogin: false
        };
    }

    checkUser = (uname, pwd) => {
        let newUserArr = this.fakeUserDetails.filter(e => {
            return (e.username === uname && e.password === pwd);
        });
        if (newUserArr.length !== 0) {
            this.setState({
                validLogin: true
            });
        }
        else {
            alert("Invalid Login Credentials");
        }
    }

    render() {
        const element = this.state.validLogin?<h1>SIGN-IN SUCCESSFUL</h1>:<Form key = {"Login Form"} onPressSubmit = {this.checkUser} />;
        return (
            <React.Fragment>
                {element}
            </React.Fragment>
        );
    }
}

export default Login;