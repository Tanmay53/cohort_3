import {ADD_TODO, TOGGLE_ITEM, DEL_ITEM} from './type'


var initialState = {
    todoList : []
}


const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO : return {
            ...state,
            todoList : [...state.todoList, action.payload]
        }
        case TOGGLE_ITEM :
            const updateItem = action.payload
            const newState = state.todoList.map(item=>item.itemName === updateItem.itemName?{...item,completed:!item.completed}:item)
            return { todoList : newState}
        case DEL_ITEM : 
            const delItem = action.payload
            const filteredItem = state.todoList.filter(function(ele){
                if(delItem.itemName !== ele.itemName){
                    return ele
                }
            })
            console.log(filteredItem)
            return { todoList : filteredItem }
        default : return state
    }
}

export {todoReducer}