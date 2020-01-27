import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
            {this.props.label}  
            <ul className='list-group'>
                {this.props.data.map(itemName =>(
                    <li className='list-group-item' key={itemName.id} style={{color:`${itemName.isDone?"green":"black"}`,
                                                                                        textDecoration:`${itemName.isDone?"line-through":"none"}`
                                                                                        }}>
                        <input type='checkbox' className='mr-2' onClick={()=>this.props.taskDone(itemName.id)}/>
                        {itemName.name}
                        <button className=' btn btn-sm btn-danger '  style={{marginLeft:"200px"}} onClick={()=>this.props.del(itemName.id)}>Delete</button>
                        </li>
                ))}
            </ul>
        </div>

        );
    }
}

export default Todo;