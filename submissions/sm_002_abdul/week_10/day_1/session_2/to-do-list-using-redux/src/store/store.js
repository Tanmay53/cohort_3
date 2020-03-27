import {createStore} from "redux"
import {reducer} from "../reducer/reducer"

const initialState = {
  todolist : []
}

const store = createStore(reducer,initialState)

export default store



