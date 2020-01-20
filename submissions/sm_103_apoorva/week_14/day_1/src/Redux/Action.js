export const ADD_VEHICLE = "ADD_ITEM"
export const SHOW_VEHICLE = "SHOW_VEHICLE"
export const DELETE_VEHICLE = "DELETE_VEHICLE"
export const UPDATE_INFO = "UPDATE_INFO"
export const MILAGE_FILTER = "MILAGE_FILTER"
export const LOGIN = 'LOGIN'
export const EDIT_INFO = "EDIT_INFO"

export const addVehicle = (items) =>({
    type:ADD_VEHICLE,
    payload:items
})

export const deleteVehicle = (items) =>({
    type:DELETE_VEHICLE,
    payload:items
})

export const showVehicle = (items) => ({
    type : SHOW_VEHICLE,
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

export const milageFilter = (items) => ({
    type:MILAGE_FILTER,
    payload:items
})

export const login = (items) => ({
    type: LOGIN,
    payload: items
})

