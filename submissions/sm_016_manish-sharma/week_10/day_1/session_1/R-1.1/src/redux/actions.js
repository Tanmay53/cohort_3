//action types
export const INCREMENT= 'increment'
export const DECREMENT='decrement'

//actions
export const inc=(num)=>({
    type:INCREMENT,
    item:num
})

export const dec=(num)=>({
    type:DECREMENT,
    item:num
})
