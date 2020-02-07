import React from "react";

const username = "admin";
const password = "admin";
const verbose = 0;

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            isLogged: false
        }
    }

    //function  to  handle change in input
    handleChange = (event) => {

        if (verbose) {
            console.log(event.target.name);
            console.log(event.target.value);
        }

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    //function  to  handle submission
    handleSubmit = (event) => {


        if (username === this.state.username && password === this.state.password) {
            console.log("shivansh")
            this.setState({
                isLogged: true
            })
            console.log(this.state);
            console.log(this.state.isLogged);
            this.props.loginState(this.state.isLogged);
            alert("Successful login");

        }
        else {
            alert("Wrong username or password");
        }
        this.reset();
        event.preventDefault();
    }

    //function to reset the form 
    reset = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    render() {
        // console.log(this.state);
        return (
            <div className="container m-5">
                <div className="border">
                    <h1 className="text-center mt-3">Login Form</h1>
                    <form className="m-5" onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                name="username"
                                placeholder="Enter Username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />

                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="text-center">
                            <input
                                type="submit"
                                className="btn btn-primary btn-lg"
                            />

                        </div>

                    </form>
                </div>

            </div>
        )
    }

}


export default Login;