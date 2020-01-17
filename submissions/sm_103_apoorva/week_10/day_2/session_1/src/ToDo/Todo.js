import React from 'react'
import Show from './Show'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import {addItem,strike,prevent} from '../Redux/Action'
import {connect} from 'react-redux'
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
                                <Fab color="primary" onClick={() => this.props.prevent(this.state.add)} aria-label="add" >
                                    <AddIcon />
                                </Fab>
                            </div>
                        <hr/>
                        {this.props.toggle ? (
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
                                    onClick={() => this.props.add(this.state.newItem)}
                                    color="primary"
                                    >Add ToDo
                                </Button>
                            </div>
                        ):(<div></div>)}
                        
                
                        <div className = "my-2 text-left">
                            <ul>
                                {this.props.toDo.map(item => {
                                    if(item.isDone == false)
                                    return(
                                        <li key={item.id} className = {this.state.bg}>
                                            <Checkbox
                                                type="checkbox"
                                                name="isDone"
                                                color="green"
                                                onClick={() => this.props.strike(item.id)}
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

const mapStateToProps = (state) => {
    return {
        toDo : state.todoList,
        toggle : state.add
    }
}

const mapDispatchToProps = (dispatch) =>({
    add : (item)=> dispatch(addItem(item)),
    prevent : (item)=> dispatch(prevent(item)),
    strike : (item)=> dispatch(strike(item)),
})

export default connect(mapStateToProps,mapDispatchToProps) (Todo)

