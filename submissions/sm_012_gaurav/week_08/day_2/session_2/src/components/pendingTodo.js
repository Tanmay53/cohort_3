/* eslint-disable no-useless-constructor */
import React from 'react';

class PendingTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.onPressDelete(this.props.idx);
    }

    handleChange = () => {
        this.props.todoCompleteCheck(Number(this.props.idx));
    }

    render() {
        return (
            <li className = "col-5 list-group-item mx-auto border border-danger">
                <div className = "row d-flex justify-content-between">
                    <div className = "col-10 ml-auto pl-2 align-self-center">
                        <input type = "checkbox" className = "form-check-input" value = "" id = "todoComplete" onChange = {this.handleChange}></input>
                        <p className = "text-danger p-0 m-0">{this.props.name}</p>
                    </div>
                    <button className = "btn btn-danger rounded-0 ml-0 mr-auto" onClick = {this.handleClick}>X</button>
                </div>
            </li>
        );
    }
}

export default PendingTodo;