//action types
export const ADD_TODO= 'ADD_TODO'
export const TOGGLE='TOGGLE'
export const DELETE='DELETE'
export const TOTAL='TOTAL'

//actions
export const add=(item)=>({
    type:ADD_TODO,
    payload:{
        itemName:item,
        completed:false
    }
})

export const update=(item)=>({
    type:TOGGLE,
    payload:{
        itemName:item
    }
})

export const del=(item)=>({
    type:DELETE,
    payload:{
        itemName:item
    }
})

export const total=()=>({
    type:TOTAL
})


