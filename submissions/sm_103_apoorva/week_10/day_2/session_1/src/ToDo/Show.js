import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import {deleteItem} from '../Redux/Action'
import {connect} from 'react-redux'


class  Show extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div className="card mx-3" style={{width:"25rem"}}>
                <div className="bg-success"><h4 className="text-center">Completed Task</h4></div>
                <div className="card-header" style={{color:"white"}}>
                    <ul className="list-group list-group-flush">
                        {this.props.toDo.map(item => {
                            if(item.isDone == true)
                            return(
                                <li key={item.id} style={{color:"green"}} className="h4 ml-1">
                                    <Checkbox 
                                        type="checkbox"
                                        name="isDone"
                                        checked={item.isDone}
                                    />
                                    {item.value}
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                        // value={item.id}
                                        onClick={() => this.props.delete(item.id)}
                                        className="ml-2"
                                    >
                                        Delete
                                    </Button>
                                </li>
                            ) 
                        })}
                    </ul>
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
    delete : (item)=> dispatch(deleteItem(item)),
    
})


export default connect(mapStateToProps,mapDispatchToProps) (Show)