import {
    ADD_CITY,
    ADD_BUS,
    DELETE_BUS,
    EDIT_BUS_DETAILS,
    SET_CURRENT_PAGE,
    SET_PER_PAGE
} from './actiontypes'

export const addCity=(value)=>({
    type:ADD_CITY,
    payload:value
})
export const addBus=(value)=>({
    type:ADD_BUS,
    payload:value
})
export const deleteBus=(value)=>({
    type:DELETE_BUS,
    payload:value
})
export const editBusDetails=(value)=>({
    type:EDIT_BUS_DETAILS,
    payload:value
})
export const setcurrentpage=(value)=>({
    type:SET_CURRENT_PAGE,
    payload:value
})
export const setperpage=(value)=>({
    type:SET_PER_PAGE,
    payload:value
})