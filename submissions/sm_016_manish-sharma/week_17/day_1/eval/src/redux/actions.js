//action types
export const GO_TO_BOOKING='GO_TO_BOOKING'
export const CONFIRM='CONFIRM'

//actions
export const goToBooking=(item,hrs)=>({
    type:GO_TO_BOOKING,
    payload:{
        itemName:item,
        hrs:hrs
    }
})

export const confirm=(item)=>({
    type:CONFIRM,
    payload:item
})
