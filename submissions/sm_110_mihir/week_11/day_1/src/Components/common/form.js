import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { addStaff } from "../../Redux/actions";
class form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            sales: ""
        };
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addStaff(this.state);
    };
    render() {
        if (!this.props.isLoggedIn) return <Redirect to="/login" />;
        return (
            <div>
                <h1 className="bg-primary text-white p-2">Add new Staff</h1>

                <form
                    onSubmit={this.handleSubmit}
                    className="form-group w-50 m-auto border bg-light p-2 m-2 text-left"
                >
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="sales">sales for FY2019-2020</label>
                    <input
                        type="text"
                        name="sales"
                        onChange={this.handleChange}
                        className="form-control"
                    />
                    <button
                        type="submit"
                        className="btn btn-primary btn-block m-2"
                    >
                        Submit
                    </button>
                </form>
                <hr />
                <Link to="/admin">
                    <button className="btn btn-primary p-2 m-2">
                        Go to Dashboard
                    </button>
                </Link>
                <Link to="/display">
                    <button className="btn btn-success p-2 m-2">
                        View all staff
                    </button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    };
};

export default connect(mapStateToProps, { addStaff })(form);
