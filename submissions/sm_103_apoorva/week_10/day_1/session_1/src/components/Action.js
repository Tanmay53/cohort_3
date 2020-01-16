// action type
export const ADD_COUNT = "ADD_COUNT"
export const SUBTRACT_COUNT = "SUBTRACT_COUNT"
export const MUL_COUNT = "MUL_COUNT"
export const DIV_COUNT = "DIV_COUNT"
export const MODULO_COUNT = "MODULO_COUNT"
// action creators

export const addCount = (val) =>({
    type:ADD_COUNT,
    payload:val
})

export const subtractCount = (val) =>({
    type:SUBTRACT_COUNT,
    payload:val
})

export const mulCount = (val) =>({
    type:MUL_COUNT,
    payload:val
})

export const divCount = (val) =>({
    type:DIV_COUNT,
    payload:val
})

export const moduloCount = (val) =>({
    type:MODULO_COUNT,
    payload:val
})