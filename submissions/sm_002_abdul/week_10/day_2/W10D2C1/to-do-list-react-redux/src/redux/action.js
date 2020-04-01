import uuid from "react-uuid"

export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const TOGGLE_TASK = "TOGGLE_TASK"
export const SHOW_INCOMPLETE_TASK = "SHOW_INCOMPLETE_TASK"

export const addTask=(item)=>({
  type : ADD_TASK,
  payload : {
    id : uuid(),
    task : item,
    completed : false
  }
})

export const deleteTask=(id)=>({
  type : DELETE_TASK,
  payload : {
    id : id
  }
})

export const toggleTask=(id)=>({
  type : TOGGLE_TASK,
  payload : {
    id : id
  }
})

export const showIncompleteTask =() =>({
  type : SHOW_INCOMPLETE_TASK
})
