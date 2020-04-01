import React from "react"
import {connect} from "react-redux"

const Total = (props) =>{
  const {todolist} = props

  let incompleteTasksList = todolist.filter(item => item.completed===false)

  return (
    <>
      <div>
        <h4 className='text-primary my-3'>List Of Incomplete Tasks</h4>
        {incompleteTasksList.map((elem)=>{
          return  <div 
                    key={elem.id} 
                    className="shadow my-2 p-2 bg-white rounded">
                      <h3 className="text-center text-danger">
                        {elem.task}
                      </h3>
                  </div>
        })} 
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    todolist : state.todolist
  }
}


export default connect(mapStateToProps,null)(Total)