/* eslint-disable no-useless-constructor */
import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
    }
    handleChange = (e) => {
        this.props.handleTodoChange(e.target.value);
    }

    handleClick = () => {
        this.props.onPressAdd();
    }
    render() {
        return (
            <div className = "col-5 mx-auto">
                <div className = "row my-3">
                    <button className = "btn btn-success ml-auto rounded-0" onClick = {this.handleClick}>+</button>
                    <input type = "text" className = "col-11 form-control borer border-success text-success mr-auto rounded-0" placeholder = "Add a to-do..." id = "todoName" value = {this.props.todoName}
                    onChange = {this.handleChange}></input>
                </div>
            </div>
        );
    }
}

export default AddTodo;