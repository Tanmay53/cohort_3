import React from 'react'
import {Box, Button} from '@material-ui/core'

export default function Todo(props) {
    return (
        <div style={{ width: '100%' }} display='flex'>
            <Box style={ {color:`${props.todo.isComplete?'green':'black'}`,
                                textDecoration:`${props.todo.isComplete?'line-through': ''}`}}
            mx="auto" 
            component='div' 
            display="inline"
            onClick={props.toggleComplete}
            color="text.primary" 
            p={1} 
            border={1} 
            borderRadius={16} 
            width="15px" 
            mt={2}>
                {props.todo.inputTodo}
            </Box>
            <Button component='div' display="inline" onClick={props.deleteTodo}>x</Button>
        </div>
    )
}
