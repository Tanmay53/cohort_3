import React, { Component } from "react";

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            address: "",
            department: "",
            salary: ""
        };
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addEle(this.state);
        this.props.editToggle();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleChange}
                        className="form-control"
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        value={this.state.age}
                        name="age"
                        onChange={this.handleChange}
                        className="form-control"
                    />
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        value={this.state.address}
                        name="address"
                        onChange={this.handleChange}
                        className="form-control"
                    />
                    <label htmlFor="department">Department</label>
                    <input
                        type="text"
                        value={this.state.department}
                        name="department"
                        onChange={this.handleChange}
                        className="form-control"
                    />
                    <label htmlFor="salary">Salary</label>
                    <input
                        type="text"
                        value={this.state.salary}
                        name="salary"
                        onChange={this.handleChange}
                        className="form-control"
                    />
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;
