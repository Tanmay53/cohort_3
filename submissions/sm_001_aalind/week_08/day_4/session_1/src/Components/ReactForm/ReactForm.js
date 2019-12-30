import React from "react";
import "./reactForm.css";
import Table from "./Table.js";

class ReactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            newUser: {
                name: '',
                age: '',
                address: '',
                department: '',
                salary: ''
            }
        }

        this.initialForm = this.state.newUser
    }

    onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState((prevState) => {
            return {
                newUser: {
                    ...prevState.newUser,
                    [name]: value
                }
            }
        })        
    }

    handleSubmit = (event) => {
        this.setState((prevState) => {
            return {
                users: [...prevState.users,prevState.newUser]
            }
        })

        this.setState({
            newUser: this.initialForm
        })

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="form-div" onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.newUser.name} onChange={this.onChangeHandler} />
                    <label>Age:</label>
                    <input type="number" name="age" value={this.state.newUser.age} onChange={this.onChangeHandler} min="1" />
                    <label>Address: </label>
                    <input type="text" name="address" value={this.state.newUser.address} onChange={this.onChangeHandler} />
                    <label>Department: </label>
                    <input type="text" name="department" value={this.state.newUser.department} onChange={this.onChangeHandler} />
                    <label>Salary: </label>
                    <input type="number" name="salary" value={this.state.newUser.salary} onChange={this.onChangeHandler} min="0" />
                    <input type="submit" value="Submit" />
                </form>
                <Table data={this.state.users} />
            </div>
        )
    }
}

export default ReactForm