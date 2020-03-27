import {ADD_TASK, DELETE_TASK, TOGGLE_TASK} from "../action/action"

export const reducer = (state,action)=>{
  switch (action.type) {

    case ADD_TASK :
      return {
        todolist : [...state.todolist,action.payload]
      }

    case DELETE_TASK :
      let todolistAfterDeletion = state.todolist.filter(el=>el.id!==action.payload.id)
      return {
        todolist : [...todolistAfterDeletion]
      }

    case TOGGLE_TASK : 
      let idToToggle = action.payload.id
      let newState = state.todolist.map(el => el.id===idToToggle ? {...el,completed:!el.completed} : el)
      return {
        todolist : newState
      }

    default :
      return state
  }
}