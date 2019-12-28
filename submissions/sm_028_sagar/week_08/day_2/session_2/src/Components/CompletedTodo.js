import React from 'react'

 const CompletedTodo = (props) => {
    return (
        <div>
            {props.label}  
            <ul className='list-group'>
                {props.data.map(itemName =>(
                    <li className='list-group-item' key={itemName.id} style={{color:`${itemName.isDone?"green":"black"}`,
                                                                                        textDecoration:`${itemName.isDone?"line-through":"none"}`,
                                                                                        backgroundColor:`${itemName.isDone?"rgb(232, 255, 219)":"none"}`   
                                                                                        }}>
                        {itemName.name}
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default CompletedTodo