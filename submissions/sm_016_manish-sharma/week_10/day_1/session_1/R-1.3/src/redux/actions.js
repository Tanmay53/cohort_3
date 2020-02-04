//action types
export const MULTIPLY= 'MULTIPLY'
export const DIVIDE='DIVIDE'
export const REMINDER='REMINDER'
export const INCREMENT='INCREMENT'

//actions
export const add=(num)=>({
    type:INCREMENT,
    item:num
})

export const mul=(num)=>({
    type:MULTIPLY,
    item:num
})
export const div=(num)=>({
    type:DIVIDE,
    item:num
})
export const rem=(num)=>({
    type:REMINDER,
    item:num
})
