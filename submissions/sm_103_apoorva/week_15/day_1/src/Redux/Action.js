export const ADD_TOPIC = "ADD_TOPIC"
export const SHOW_TOPIC = "SHOW_TOPIC"
export const UPDATE_INFO = "UPDATE_INFO"
export const LOGIN = 'LOGIN'
export const EDIT_INFO = "EDIT_INFO"
export const FILTER = "FILTER"

export const addTopic = (items) =>({
    type:ADD_TOPIC,
    payload:items
})

export const showTopic = (items) => ({
    type : SHOW_TOPIC,
    payload:items
})

export const updateInfo = (items) => ({
    type:UPDATE_INFO,
    payload:items,
})

export const editInfo = (items) => ({
    type:EDIT_INFO,
    payload:items,
})

export const filter = (items) => ({
    type:FILTER,
    payload:items,
})

export const login = (items) => ({
    type: LOGIN,
    payload: items
})

