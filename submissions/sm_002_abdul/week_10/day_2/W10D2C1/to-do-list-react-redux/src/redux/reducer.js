import { ADD_TASK,DELETE_TASK,TOGGLE_TASK,SHOW_INCOMPLETE_TASK } from "./action"


const initialState = {
  todolist : []
}

const reducer = (state = initialState, action) =>{
  switch (action.type){
    case ADD_TASK :
      return {
        todolist : [...state.todolist,action.payload]
      }

    case DELETE_TASK :
      let idToDelete = action.payload.id
      let listAfterDeletion = state.todolist.filter(item => item.id!==idToDelete)
      return {
        todolist : listAfterDeletion
      }

    case TOGGLE_TASK :
      let idToToggle = action.payload.id
      let listAfterToggle = state.todolist.map(item => item.id===idToToggle ? {...item,completed:!item.completed} : item)
      return {
        todolist : listAfterToggle
      }

    case SHOW_INCOMPLETE_TASK :
      return {
        todolist : state.todolist
      }

    default :
      return state
  }
}

export default reducer