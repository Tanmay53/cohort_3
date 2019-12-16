/* eslint-disable no-useless-constructor */
import React from 'react';


class CompletedTodo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className = "col-5 list-group-item mx-auto border border-success">
                <div className = "row">
                    <div className = "col-10 ml-3 pl-2 align-self-center">
                        <input type = "checkbox" className = "form-check-input" value = "" id = "todoComplete" checked></input>
                        <p className = "text-success p-0 m-0"><del>{this.props.name}</del></p>
                    </div>
                </div>
            </li>
        )
    }
}

export default CompletedTodo;