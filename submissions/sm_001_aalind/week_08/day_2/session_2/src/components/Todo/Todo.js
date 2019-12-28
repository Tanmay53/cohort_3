import React, {Component} from "react";
import TodoList from "./TodoList";
import todoData from "./todoData"

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: todoData.todos,
            newItem: ''
        }
    }

    todoHandler = (todoId) => {
        const todoItems = this.state.todos.map((todo) => {
            if(todoId === todo.id) {
                return {
                    ...todo,
                    checked: !todo.checked
                }
            } 
            return todo;
        });

        this.setState((prevState) => {
            return {
                ...prevState,
                todos: todoItems
            }
        });
    }

    onChangeHandler = (event) => {
        this.setState({
            newItem: event.target.value
        });
    }

    onclickHandle = () => {
        this.setState({
            showCompleted: !this.state.showCompleted
        });
    }

    submitItemHandler = () => {
        if(this.state.newItem.length === 0) {
            alert("Enter Valid Item!!")
            return;
        }

        const itemId = this.state.todos.length+1;
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: itemId,
                    description: this.state.newItem,
                    checked: false
                }
            ],
            newItem: ''
        });
    }

    render() {
        const incompletedTask = this.state.todos.filter(todo => !todo.checked).map((todo) => {
            return (
                <TodoList key={todo.id} content={todo} change={this.todoHandler} />
            )
        });

        const completedTask = this.state.todos.filter(todo => todo.checked).map((todo) => {
            return (
                <TodoList key={todo.id} content={todo} change={this.todoHandler} />
            )
        });

        return (
            <div>
                <input type="text" onChange={this.onChangeHandler} value={this.state.newItem} />
                <button onClick={this.submitItemHandler}>Submit</button>
                <p>Todo List</p>
                {incompletedTask}
                <button onClick={this.onclickHandle}>Completed task</button>
                {(this.state.showCompleted) ? completedTask : null}
            </div>
        )
    }
}

export default Todo