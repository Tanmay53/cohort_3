import React,{useState} from "react"
import {connect} from "react-redux"
import {addTask} from '../redux/action'

const InputTaker =(props)=>{

  const {addTask} = props
  const [currentTask,setCurrentTask] = useState('')

  return(
    <div className='flex my-3'>

      <input
        className='form-control'
        type='text'
        onChange={(e)=>{setCurrentTask(e.target.value)}}/>
      
      <button
        className='btn btn-primary my-3 col-lg-6 col-12'
        onClick ={()=>addTask(currentTask)}>
        <span className='font-weight-bold h4'>Add</span>
      </button>

    </div>
  )

}


const mapDispatchToProps = (dispatch) =>{
  return {
    addTask : currentTask=>dispatch(addTask(currentTask))
  }
}

export default connect(null,mapDispatchToProps)(InputTaker)