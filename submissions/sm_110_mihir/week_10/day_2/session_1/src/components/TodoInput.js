import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/action";
export class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
    }

    handleChange = e => {
        this.setState({ input: e.target.value });
    };

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({
            input: ""
        });
    };
    render() {
        return (
            <div className="card-header border-success">
                <input type="text" onChange={this.handleChange} />
                <button
                    className="btn btn-primary"
                    onClick={this.handleAddTodo}
                >
                    Add Todo
                </button>
            </div>
        );
    }
}

export default connect(null, { addTodo })(TodoInput);
