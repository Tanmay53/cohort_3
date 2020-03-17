import { ADD_EMPLOYEE, DELETE_DATA } from "./actionTypes"

export const addEmp = (payload) => ({
    type: ADD_EMPLOYEE,
    payload
})

export const wipe = () => ({
    type: DELETE_DATA
})

