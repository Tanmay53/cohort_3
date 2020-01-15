import React from 'react'
import Show from './Show'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

class Todo extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            newItem : "",
            todoList : [],
            add : false
        }
    }

    addItem(todoValue)
    {
        if(todoValue != "")
        {
            const newItem = {
                id : Date.now(),
                value : todoValue,
                isDone : false
            }
        let list = [...this.state.todoList]
        list.push(newItem)
        this.setState({
            todoList: list,
            newItem : "",
            add : false
        })
        }
    }

    deleteItem = (id)=>
    {
        alert(id)
        let list = [...this.state.todoList]
        let updatedList = list.filter(item => item.id != id)
        this.setState({todoList: updatedList})
        console.log(updatedList)
    }
    updateInput(input){
        this.setState({newItem:input})
    }

    strike(id)
    {
        // console.log(this.state.todoList)
        let list  = [...this.state.todoList]
        list.forEach(ele => {
            if(ele.id == id)
            {
                ele.isDone = true
            }
        })
        this.setState({
            todoList : list,
        })
    }
    prevent=(e)=>
    {
        e.preventDefault()
        this.setState({add:true})
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
                                <Fab color="primary" onClick={this.prevent} aria-label="add" >
                                    <AddIcon />
                                </Fab>
                            </div>
                        <hr/>
                        {this.state.add ? (
                            <div className="row">
                                <TextField
                                    type = "text"
                                    className="form-control mx-4 "
                                    placeholder="write a ToDo"
                                    style={{width: "250px"}}
                                    value={this.state.newItem}
                                    onChange={e => this.updateInput(e.target.value)}
                                />
                                <Button 
                                    className = "mx-2"
                                    onClick={() => this.addItem(this.state.newItem)}
                                    color="primary"
                                    >Add ToDo
                                </Button>
                            </div>
                        ):(<div></div>)}
                        
                
                        <div className = "my-2 text-left">
                            <ul>
                                {this.state.todoList.map(item => {
                                    if(item.isDone == false)
                                    return(
                                        <li key={item.id} className = {this.state.bg}>
                                            <Checkbox
                                                type="checkbox"
                                                name="isDone"
                                                color="green"
                                                onClick={() => this.strike(item.id)}
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
                        <Show label={this.state.todoList} upd = {this.deleteItem}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo