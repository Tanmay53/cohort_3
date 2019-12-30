import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData, toggleLoggedIn } from "../redux/actions";
import { Redirect } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    async handleSubmit(e) {
        e.preventDefault();
        let url, method, headers;

        url = "/auth/login";
        method = "post";
        await this.props.fetchData(url, method, this.state);
        console.log("err---->", this.props.error.message);
        if (this.props.data.error === false) {
            url = "/user/" + this.state.username;
            method = "get";
            headers = {
                Authorization: "Bearer " + this.props.data.token
            };
            this.props.fetchData(url, method, "", headers);
            console.log(
                "token url",
                url,
                method,
                headers,
                this.state.username,
                "username"
            );
            this.props.toggleLoggedIn();
        } else alert("err credentials:", this.props.error);
        console.log("details:", this.props.data);
    }

    render() {
        if (this.props.isLoggedIn === true) {
            console.log("logged in successfully");
            return <Redirect to="/dashboard" />;
        } else
            return (
                <div>
                    {this.props.error ? (
                        <p className="bg-light text-danger">
                            !!Error. {this.props.error.message}. Please enter
                            valid username
                        </p>
                    ) : (
                        ""
                    )}
                    <form
                        onSubmit={this.handleSubmit}
                        className="form-group m-auto w-50 container text-left border border-success bg-light p-3"
                    >
                        <div className="row m-1">
                            <label htmlFor="username" className="col">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                className="col form-control"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="row m-1">
                            <label htmlFor="password" className="col">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="col form-control"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="row m-1">
                            <button
                                type="submit"
                                className="btn btn-block btn-primary"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        data: state.data,
        isLoggedIn: state.isLoggedIn,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (a, b, c, d) => dispatch(fetchData(a, b, c, d)),
        toggleLoggedIn: () => dispatch(toggleLoggedIn())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
