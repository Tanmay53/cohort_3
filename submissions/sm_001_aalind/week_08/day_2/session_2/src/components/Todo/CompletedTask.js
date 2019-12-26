import React from "react";

function CompletedTask() {
    return (
        <div >
            <input 
                type="checkbox" 
                value={props.content.description} 
                checked={props.content.checked}
                onChange={() => props.change(props.content.id)}
            />
            <p style={{"textDecoration": (props.content.checked) ? 'line-through' : 'none'}}>{props.content.description}</p>
        </div>
    )
}

export default CompletedTask