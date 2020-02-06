import {combineReducers} from 'redux'
import {ADD_TODO ,TOGGLE, DELETE, TOTAL} from './actions'

var initialState={
    todoList:[],
    num:0
}

export const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            let newTodoList = state.todoList
            let taskNum= newTodoList.filter(e=>e.completed==false)
            return {...state, todoList:[...newTodoList, action.payload],num:(Object.keys(taskNum)).length+1}
        case TOGGLE:
            let newTodoList2 = state.todoList
            let updatedTodo= newTodoList2.map(e=>e.itemName===action.payload.itemName?{...e,completed:true}:e)
            let taskNum2= updatedTodo.filter(e=>e.completed===false)
            return {...state, todoList:updatedTodo, num:(Object.keys(taskNum2)).length}
        case DELETE:
            let newTodoList3 = state.todoList
            let updatedList = newTodoList3.filter(e=>e.itemName!=action.payload.itemName)
            return {...state, todoList:updatedList}
        default:
            return state
    }
}

