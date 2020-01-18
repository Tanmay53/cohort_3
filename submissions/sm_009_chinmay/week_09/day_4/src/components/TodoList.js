import React, { Component } from 'react'
import TodoInput from './TodoInput'
import Todo from './Todo'
import {Button} from '@material-ui/core'

export default class TodoList extends Component {

    constructor(){
        super()
        this.state = {
            todos: [],
            toShowTodos: 'all'
        }
    }

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos],
        })
    }
    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(e=> 
                (e.id ===id) ?  
                {
                    id: e.id,
                    inputTodo: e.inputTodo,
                    isComplete: !e.isComplete
                }
                : 
                e
            )
        })
    }

    handleClickShowCompleted = (e) => {
        this.setState({
            toShowTodos: e
        })
    }
    handleDelete = (id) => {
        this.setState({
            todos: this.state.todos.filter(e=>e.id!==id)
        })
    }
    render() {
        let todos = []
        if(this.state.toShowTodos==='completed') {
            todos = this.state.todos.filter(e=>e.isComplete)
        }
        else if(this.state.toShowTodos==='notCompleted'){
            todos = this.state.todos.filter(e=>!e.isComplete)
        }
        else if(this.state.toShowTodos==='all'){
            todos = this.state.todos
        }
        return (
            <div>
                <TodoInput onSubmit={this.addTodo}/>
                <div>
                    <Button onClick={()=> this.handleClickShowCompleted('all')} variant='contained' size='large'>Show All</Button>
                    <Button onClick={()=> this.handleClickShowCompleted('notCompleted')} variant='contained' size='large'>Not Completed</Button>
                    <Button onClick={()=> this.handleClickShowCompleted('completed')} variant='contained' size='large'>Show Completed</Button>
                </div>
                <div>
                    {todos.map(e=> 
                        <Todo 
                        key={e.id} 
                        toggleComplete = {()=>this.toggleComplete(e.id)}
                        todo={e} 
                        deleteTodo={()=>this.handleDelete(e.id)}
                        />
                    )}
                </div>

            </div>
        )
    }
}
