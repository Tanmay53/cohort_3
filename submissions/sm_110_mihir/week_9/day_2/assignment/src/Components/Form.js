import React, { Component } from "react";

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.checkLogin(this.state.username, this.state.password);
    };
    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    className="form-group w-50 m-auto"
                >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                        className="form-control"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        className="form-control"
                    />
                    <button
                        className="btn btn-primary mt-2 btn-block"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;
