import {Add,Remove,Edit,Update,Write} from './actions'

const initialState = {
    todo:[],
    isEditClick: false,
    edit:null,
    currentValue:''
}

const reducer = ( state = initialState, action) => {
    switch(action.type){
        case Add:
            console.log('inside reducer')
            let value = {
                id:Math.random()+1,
                done:false,
                value:state.currentValue
            }
            return {
                ...state,
                todo:[...state.todo,value],
                currentValue:''
            }
        case Update:
                let check = state.todo.find(item => item.id === action.id)
                    check = {...check,done:!check.done}
                let newTodo = state.todo.filter(item => item.id !== action.id)
                return{
                    ...state,
                    todo:[...newTodo,check]
                }
        case Remove:
                let deleteTodo = state.todo.filter(item => item.id !== action.id)
                return {
                    ...state,
                    todo:[...deleteTodo]
                }
        case Edit:
                let editTodo = state.todo.find(item => item.id === action.id)
                let editRemoved = state.todo.filter(item => item.id !== action.id)
                console.log(editTodo)
                return {
                    ...state,
                    todo:editRemoved,
                    currentValue:editTodo.value    
                }
        case Write:
                return {
                    ...state,
                    currentValue: action.value
                }
        default:
            return state
    }
}

export default reducer