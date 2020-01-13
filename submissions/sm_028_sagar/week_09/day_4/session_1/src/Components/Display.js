import React from 'react'
import {List,ListItem,IconButton,ListItemSecondaryAction,Checkbox,ListItemText} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

export default function Display({data,doneTodo,deleteTodo}) {

    let handleCheck = todo => {
        doneTodo(todo)
    }

    let handleDelete = todo => {
        deleteTodo(todo)
    }

    return (
            <List>
                { data.map(ele =>{
                    return (
                    <ListItem key={ele.id} button >
                        <Checkbox key={ele.id+1} onClick={()=>handleCheck(ele)} />
                        <ListItemText key={ele.id+2}  primary={ele.value} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={()=>handleDelete(ele)} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    );
                })}
            </List>
    )
}
