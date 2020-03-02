import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title,handleDelete,handleEdit} = this.props
        return (
            <div className="container">
                <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                    <input type="checkbox" id ="check"></input>
                    <h6>{title}</h6>
                    <div className="todo-icon">
                        <span className=" text-success" onClick={handleEdit}>
                            <i className="fa fa-pencil mx-1 text-primary" ></i>
                        </span>
                        <span className=" text-danger" onClick={handleDelete}>
                            <i className="fa fa-trash"></i>
                        </span>
                    </div>
                </li>


            </div>
        )
    }
}
