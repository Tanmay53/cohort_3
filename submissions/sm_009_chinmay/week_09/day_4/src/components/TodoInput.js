import React, { Component } from 'react'
import { Button, TextField, Typography } from '@material-ui/core';

export default class TodoInput extends Component {
    constructor() {
        super()
        this.state = {
            inputTodo: []
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('clicked')
        this.props.onSubmit({
            inputTodo: this.state.inputTodo,
            id: Math.random()+10,
            isComplete: false
        })
        this.setState({
            inputTodo: ''
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Typography variant="h4">Todo App</Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField 
                        value={this.state.inputTodo}
                        name='inputTodo' 
                        onChange={this.handleChange} 
                        label="Add todo.." 
                        variant="outlined" />
                    <Button 
                        onClick={this.handleSubmit} 
                        variant='contained' 
                        size='large'>
                            ADD</Button>
                </form> 
            </div>
        )
    }
}
