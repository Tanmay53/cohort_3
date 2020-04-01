import React from "react"
import {connect} from "react-redux"
import{toggleTask,deleteTask} from "../redux/action"

const TodoData = (props) =>{

    const {todolist,toggleTask,deleteTask} = props

    return (
      <div>
        <h4 className='text-primary my-3'>List Of Tasks To Do</h4>
        {todolist.map((elem)=>{
          return <div 
                  key={elem.id} 
                  className="shadow my-2 p-2 bg-white rounded">
                    
                    <div className='row'>

                      <div className="col-1">
                        <input
                          id = {elem.id}
                          type='checkbox'
                          checked={elem.completed}
                          onChange={(e)=>toggleTask(e.target.id)}/> 
                      </div>

                      <div
                        className="col-7 d-flex flex-row justify-content-start" 
                        style={
                          {
                            color:`${elem.completed ? 'green' : 'steelblue'}`,
                            textDecoration:`${elem.completed ? 'line-through': ''}`
                          }}>
                        <h4 className='mx-2'>{elem.task}</h4>
                      </div>

                      <div className="col-4 d-flex flex-row justify-content-end">
                        <button
                          id = {elem.id} 
                          onClick={(e)=>deleteTask(e.target.id)}
                          className='btn btn-primary'>
                          DELETE
                        </button>
                      </div>
                    </div>
                </div>
        })}
      </div>
    )
}

const mapStateToProps = (state) =>{
  return {
    todolist : state.todolist
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    toggleTask : id => dispatch(toggleTask(id)),
    deleteTask : id =>dispatch(deleteTask(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoData)