export const ADD_ITEM = "ADD_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"
export const UPDATE_ITEM = "UPDATE_ITEM"
export const STRIKE = "STRIKE"
export const PREVENT = "PREVENT"

export const addItem = (items) =>({
    type:ADD_ITEM,
    payload:items
})

export const deleteItem = (items) =>({
    type:DELETE_ITEM,
    payload:items
})

export const strike = (items) =>({
    type:STRIKE,
    payload:items
})

export const prevent = (items) =>({
    type:PREVENT,
    payload:items
})