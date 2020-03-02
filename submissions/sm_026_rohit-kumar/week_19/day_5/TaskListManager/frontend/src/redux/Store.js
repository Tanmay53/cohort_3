import { loginReducer, tasklistReducer } from "./Reducer"
import {createStore, combineReducers} from 'redux'

const reducer = combineReducers ({
    login: loginReducer,
    tasklist: tasklistReducer
})

const store = createStore(reducer)
store.subscribe(() => {
    console.log('redux state : ', store.getState())
})

export default store