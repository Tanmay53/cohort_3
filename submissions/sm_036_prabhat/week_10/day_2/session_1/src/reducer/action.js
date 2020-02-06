export const ADD_TODO = "ADD_TODO"
export const TOGGLE_ITEM = "TOGGLE_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"

//Todo 

export const addTodo = (item) => ({
    type:ADD_TODO,
    payload:{
        itemName : item,
        completed : false
    }
})
export const toggleItem = (item) => ({
    type : TOGGLE_ITEM,
    payload : {
        itemName : item
    }
})

export const deleteItem = (index) => ({
    type : DELETE_ITEM,
    payload :index
})