import React, { Component } from 'react'
import TodoItem from "./TodoItem"

export default class TodoList extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit} = this.props
        return (
            <div className="card card-body my-3 p-5">

                <div className="text-center">
                    <ul className="list group mb-5">
                        <h2 className="text-capitalize text-center font-weight-bold second">todo list</h2>
                        
                    {
                        items.map(item => {
                            return (
                                <TodoItem key={item.id} title = {item.title} handleDelete ={()=> handleDelete(item.id)} handleEdit ={()=> handleEdit(item.id)}/>
                            )
                        })
                    }
                    <div className="row">
                        <button type="button" className=" col-10 col-lg-5 btn btn-danger btn-block text-capitalize mt-5 mx-3" onClick={clearList}>
                            clear list
                        </button>
                        <button type="button" className=" col-10 col-lg-5 btn btn-success btn-block text-capitalize mt-5 mx-3">
                            show completed items
                        </button>
                    </div>
                        

                    </ul>
                    
                </div>
            </div>
        )
    }
}
