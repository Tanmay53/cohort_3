import { ADD_TODO, TOGGLE_ITEM, DEL_ITEM} from './type'

export const addTodo = (item) => ({
    type : ADD_TODO,
    payload : item
        // item
})

export const toggleItem = (item) => ({
    type : TOGGLE_ITEM,
    payload : item
        // item
})

export const deleteItem = (item) => ({
    type : DEL_ITEM,
    payload : item
})
