import {createStore} from 'redux'
import reducer from './reducers'

const Add = 'AddTodo'
const Remove = 'RemoveTodo'
const Edit = 'EditTodo'
const Update = 'UpdateTodo'
const Write = 'WriteTodo'

const store = createStore(reducer)


const addTodo = (value) => {
    console.log('adding todo')
    return {
        type:Add
    }
}

const writeTodo = (value) =>{
    return {
        type:Write,
        value
    }
}

const removeTodo = (id) =>{
    return {
        type:Remove,    
        id
    }
}

const editTodo = (id) =>{
    return {
        type: Edit,
        id
    }
}

const updateTodo = (id) =>{
   return {
    type: Update,
    id
   }
}

export {addTodo,editTodo,updateTodo,writeTodo,removeTodo,Add,Remove,Edit,Update,Write,store}