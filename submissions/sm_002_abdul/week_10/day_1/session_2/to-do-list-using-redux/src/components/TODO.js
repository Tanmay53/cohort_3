import React from "react"
import './TODO.css'
import store from '../store/store'
import { toggle_task, delete_task } from "../action/action"

const TODO = (props) =>{

  return (
    <div>
      <h4 className='text-primary my-3'>{props.label}</h4>
      {props.item.map((elem)=>{
        return <div 
                key={elem.id} 
                className="shadow my-2 p-2 bg-white rounded">
                  
                  <div className='row'>

                    <div className="col-1">
                      <input
                        type='checkbox'
                        checked={elem.completed}
                        onChange={()=>(store.dispatch(toggle_task(elem.id)))}
                      /> 
                    </div>

                    <div
                      className="col-7 d-flex flex-row justify-content-start" 
                      style={
                        {
                          color:`${elem.completed ? 'green' : 'steelblue'}`,
                          textDecoration:`${elem.completed ? 'line-through': ''}`
                        }
                      }>
                      <h4 className='mx-2'>{elem.task}</h4>
                    </div>

                    <div className="col-4 d-flex flex-row justify-content-end">
                      <button 
                        onClick={()=>(store.dispatch(delete_task(elem.id)))}
                        className='btn btn-primary'>
                        DELETE</button>
                    </div>
                  </div>
        </div>
      })}
    </div>
  )
}

export default TODO