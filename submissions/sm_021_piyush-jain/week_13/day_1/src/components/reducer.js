import React from 'react'
const ADDUSERS = "ADDUSERS";
const ALLUSERS = "ALLUSERS";
const initialState = {
    addUsers: [],
    allUsers: []
}
const reducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case ADDUSERS:
            return {
                ...state,
                addUsers : [...state.addUsers, action.payload]
            }
        default:
            return state
    }
}
export default reducer