import React from "react";
import Form from "./Form";

var user1 = {
    username: "admin",
    password: "admin"
};

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loginStatus: false
        };
    }

    //function to  validate the username and password
    validate = (username, password) => {

        console.log("validate", username, password);

        this.setState({
            username: username,
            password: password
        });

        setTimeout(() => {


            //checking whether the enter username and password is equal dummy username and password
            if (this.state.username === user1.username && this.state.password === user1.password) {

                alert("Correct credential");

                this.setState({
                    loginStatus: true
                });
            }

            else {
                alert("Incorrect credential");
            }
        }, 100);
    };

    render() {

        if (this.state.loginStatus) {
            return (
                <h1 className="text-success m-5 p-5 text-center border border-dark "> LOGIN SUCESSFULL </h1>
            );
        }
        else {
            return (
                <div>
                    <Form function={this.validate} />
                </div>
            );
        }
    }
}
export default Login;