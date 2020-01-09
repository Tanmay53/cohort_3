import React from 'react'
import {List,ListItem,Checkbox,ListItemText} from '@material-ui/core'

export default function Completed({data}) {
    return (
        <div>
            <List>
                { data.map(ele =>{
                    return (
                    <ListItem key={ele.id+5} >
                        <ListItemText key={ele.id+6}  primary={ele.value} />
                    </ListItem>
                    );
                })}
            </List>
        </div>
    )
}
