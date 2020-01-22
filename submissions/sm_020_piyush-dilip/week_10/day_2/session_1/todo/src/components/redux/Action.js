export const ADD_NEW_TODO = 'ADD_NEW_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE = 'TOGGLE'

export const addNewToDo = (payload) => ({
    type: ADD_NEW_TODO,
    payload
})

export const delToDO = (payload) => ({
    type: DELETE_TODO,
    payload
})

export const toggle = (payload) => ({
    type: TOGGLE,
    payload
})


