import React from 'react'
import Show from './Show'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import {store} from '../Redux/Store'
import {addItem,strike,prevent} from '../Redux/Action'

class Todo extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            newItem : "",
            add : false
        }
    }

    

    
    render()
    {
        return(
            <div>
                <div className="row">
                    <div className ="col my-2">
                        <div className="bgLogin text-center" >
                            <span className=" mt-2 h4">Add Todo</span>
                            <div className="text-right mr-2 mt-2">
                                <Fab color="primary" onClick={() => store.dispatch(prevent(this.state.add))} aria-label="add" >
                                    <AddIcon />
                                </Fab>
                            </div>
                        <hr/>
                        {store.getState().add ? (
                            <div className="row">
                                <TextField
                                    type = "text"
                                    className="form-control mx-4 "
                                    placeholder="write a ToDo"
                                    style={{width: "250px"}}
                                    onChange={
                                        (e)=>this.setState({newItem:e.target.value})
                                    }
                                />
                                <Button 
                                    className = "mx-2"
                                    onClick={() => store.dispatch(addItem(this.state.newItem))}
                                    color="primary"
                                    >Add ToDo
                                </Button>
                            </div>
                        ):(<div></div>)}
                        
                
                        <div className = "my-2 text-left">
                            <ul>
                                {store.getState().todoList.map(item => {
                                    if(item.isDone == false)
                                    return(
                                        <li key={item.id} className = {this.state.bg}>
                                            <Checkbox
                                                type="checkbox"
                                                name="isDone"
                                                color="green"
                                                onClick={() => store.dispatch(strike(item.id))}
                                            />
                                            {item.value}

                                        </li>
                                    ) 
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                    <div className ="col my-2">
                        <Show />
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo