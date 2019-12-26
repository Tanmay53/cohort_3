import React from "react";

function TodoList(props) {
   
    return (
        <div style={{display: "flex"}}>
            <input 
                type="checkbox" 
                value={props.content.description} 
                checked={props.content.checked}
                onChange={() => props.change(props.content.id)}
            />
            <div style={{"textDecoration": (props.content.checked) ? 'line-through' : 'none'}}>{props.content.description}</div>
        </div>
    )
}

export default TodoList