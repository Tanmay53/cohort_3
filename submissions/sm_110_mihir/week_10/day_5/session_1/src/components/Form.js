import React, { Component } from "react";
import { fetchData, reset } from "../redux/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            username: "",
            mobile: "",
            description: ""
        };
    }

    componentWillUnmount() {
        this.props.reset();
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = async e => {
        e.preventDefault();
        let url = "/auth/register";
        let method = "post";

        await this.props.fetchData(url, method, this.state);
    };
    render() {
        if (this.props.data.error === true || this.props.data.error === false) {
            alert(this.props.data.message);
            return <Redirect to="/login" />;
        }
        return (
            <div className="div">
                <form
                    onSubmit={this.handleSubmit}
                    className="form-group m-auto w-50 container text-left border border-success bg-light p-3 "
                >
                    <div className="row m-1">
                        <label htmlFor="name" className="col">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="form-control col"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="row m-1">
                        <label htmlFor="email" className="col">
                            email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="form-control col"
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
                            className="form-control col"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="row m-1">
                        <label htmlFor="username" className="col">
                            username
                        </label>
                        <input
                            type="text"
                            name="username"
                            className="form-control col"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="row m-1">
                        <label htmlFor="mobile" className="col">
                            mobile
                        </label>
                        <input
                            type="text"
                            name="mobile"
                            className="form-control col"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="row m-1">
                        <label htmlFor="description" className="col">
                            description
                        </label>
                        <input
                            type="text"
                            name="description"
                            className="form-control col"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-block btn-primary m-1"
                    >
                        Register
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        data: state.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (a, b, c, d) => dispatch(fetchData(a, b, c, d)),
        reset: () => dispatch(reset())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
