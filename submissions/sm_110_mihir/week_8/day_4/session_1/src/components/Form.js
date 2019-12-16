import React, { Component } from "react";

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            address: "",
            department: "",
            salary: 0
        };
    }
    handleChange = e => {
        if (e.target.name === "salary")
            this.setState({
                salary: Number(e.target.value)
            });
        else
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
                        type="number"
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
                    <select
                        type="text"
                        value={this.state.department}
                        name="department"
                        onChange={this.handleChange}
                        className="custom-select"
                    >
                        <option value="IT" selected>
                            IT
                        </option>
                        <option value="sales">Sales</option>
                        <option value="manager">manager</option>
                        <option value="operations">operations</option>
                    </select>
                    <label htmlFor="salary">Salary</label>
                    <input
                        type="number"
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
