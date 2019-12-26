import React from 'react'

const Todo = (props) => {
    return (
        <div>
            {props.label}
            {props.data.map((item, index) => (
                <div key={item.name+index} className='form-control col-5 bd-highlight justify-content-between' style={{display: 'flex'}}>
                    <button className="badge badge-pill badge-success" onClick={()=> props.toggleDone(index)}>✓</button>
                    <div style={ {color:`${item.isDone?'green':'black'}`,
                                textDecoration:`${item.isDone?'line-through': ''}`}}>{item.name}</div>
                    <button className="badge badge-pill badge-danger" onClick={()=> props.del(index)}>x</button>
                </div>
            ))}
        </div>
    )
}

export default Todo;