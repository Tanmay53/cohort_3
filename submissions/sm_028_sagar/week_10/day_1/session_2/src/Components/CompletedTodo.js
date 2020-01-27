import React from 'react'
import {store} from '../redux/actions'

export default function CompletedTodo() {
    let completed = store.getState().todo.filter(item => item.done)
    return (
        <div>
             <ul className="list-group">
                {completed.map(item =>{
                    return (
                        <li key={item.id} className='list-group-item'>
                            {item.value}
                        </li>
                    )
                })}
             </ul>
        </div>
    )
}
