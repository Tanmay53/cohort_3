import React from 'react'

 const Todo = (props) => {
    return (
        <div>
            {props.label}  
            <ul className='list-group'>
                {props.data.map(itemName =>(
                    <li className='list-group-item' key={itemName.id} style={{color:`${itemName.isDone?"green":"black"}`,
                                                                                        textDecoration:`${itemName.isDone?"line-through":"none"}`
                                                                                        }}>
                        <input type='checkbox' className='mr-2' onClick={()=>props.toggleDone(itemName.id)}/>
                        {itemName.name}
                        <button className='ml-5 btn btn-sm btn-danger' onClick={()=>props.del(itemName.id)}>Delete</button>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo