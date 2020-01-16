import React from 'react'
import {updateTodo,removeTodo, editTodo,store} from '../redux/actions'


export default function ShowcaseTodo() {
    return (
        <div>
            <ul className="list-group">
                {store.getState().todo.map(item =>{
                    return (
                        <li key={item.id} className='list-group-item'>
                            <input type='checkbox' className='m-2' onClick={()=>store.dispatch(updateTodo(item.id))}/>    
                            {item.value}
                            <button className='btn btn-warning btn-sm m-2' onClick={()=>store.dispatch(removeTodo(item.id))}>Delete</button>
                            <button className='btn btn-danger btn-sm m-2' onClick={()=>store.dispatch(editTodo(item.id))}>Edit</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
