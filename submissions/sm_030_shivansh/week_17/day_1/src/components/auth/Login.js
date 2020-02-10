import React from "react";
import axios from "axios";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        }
    }


    //function to handle the change of the input
    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })

    }
    // function  submit form data
    handleSubmit = (event) => {

        axios.post("http://localhost:8080/auth/login", {
            username: this.state.username,
            password: this.state.password
        })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => console.log(error));
        event.preventDefault();
    }




    render() {
        // console.log("username", this.state.username);
        // console.log("password", this.state.password);
        return (
            <>

                <div className="row justify-content-center my-5">

                    <div className="col-12 col-lg-4 border border-dark py-5 px-3">
                        <h1 className="my-3 text-center font-weight-normal">Login Form</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="username"
                                    name="username"
                                    placeholder="username"
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
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="text-center">
                                <input type="submit" class="btn btn-primary" value="Submit" />
                            </div>

                        </form>
                    </div>
                </div>
            </>
        )
    }

}


export default Login;