import uuid from "react-uuid"

//Action types
export const ADD_TASK = "ADD_TASK"
export const TOGGLE_TASK = "TOGGLE_TASK"
export const DELETE_TASK = "DELETE_TASK"

//action creators

export const add_task = (item) =>({
  type : ADD_TASK,
  payload : {
    id : uuid(),
    task : item,
    completed:false
  }
})

export const toggle_task = (identity)=>({
  type : TOGGLE_TASK,
  payload : {
    id : identity
  }
})

export const delete_task = (identity)=>({
  type : DELETE_TASK,
  payload : {
    id : identity
  }
})