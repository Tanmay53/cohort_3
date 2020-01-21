import React from 'react';

const Todo = (props) => {
    return(
        <div>
            {props.label}
            {props.data.map((item,index)=>(
                <div key = {item.name}>
                    <div style = {{color: `${item.isDone?"green":"black"}`,
                                    textDecoration: `${item.isDone?"line-through":""}`}}>
                        {item.name}
                    </div>
                    <button onClick = {()=> props.toggleDone(item.name)}>TOGGLE DONE</button>
                    <button onClick = {()=> props.del(item.name)}>DELETE</button>
                </div>
            ))}
        </div>
    )
}

export default Todo