import React, { Component } from 'react'
import TodoList from "./TodoList"
import TodoInput from "./TodoInput"
import "./App.css"
import uuid from "uuid"


export default class App extends Component {
    state = {
        items: [],
        id : uuid(),
        item: '',
        editItem: false
    }
    handleChange = e => {
        this.setState({
            item: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const newItem = {
            id:this.state.id,
            title: this.state.item,
        }
        console.log(newItem)
        const updateditems = [...this.state.items, newItem]

        this.setState({
            items: updateditems,
            id : uuid(),
            item: "",
            editItem: false
        })
    }
    clearList = () =>{
        this.setState ({
            items:[]
        })
    }
    handleEdit =  (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id)
        const selectedItem = this.state.items.find(item => item.id === id)
        this.setState({
            items:filteredItems ,
            item: selectedItem.title,
            editItem:true,
            id : id
        })
    }
    handleDelete = (id) =>{
        const filteredItems = this.state.items.filter(item => item.id !== id)
        this.setState({
            items:filteredItems
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8">
                            <h2 className="text-center font-weight-bold first">Todo Input</h2>
                            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}
                            editItem = {this.state.editItem}
                             />
                            <TodoList items={this.state.items} clearList = {this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
