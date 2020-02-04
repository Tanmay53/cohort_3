export const ADD_TODO="ADD_TODO"
export const TOGGLE_ITEM="TOGGLE_ITEM"
export const REMOVE_ITEM="REMOVE_ITEM"
export const PENDING_COUNT="PENDING_COUNT"

export const addTodo=(item)=>{
    return {
        type:ADD_TODO,
        payload:item
    }
}


export const toggleTodo=(item)=>{
    return {
        type:TOGGLE_ITEM,
        payload:item
    }
}


export const removeTodo=(item)=>{
    return {
        type:REMOVE_ITEM,
        payload:item
    }
}

export const pendingCount=(item)=>{
    return {
        type:PENDING_COUNT,
        payload:item
    }
}
