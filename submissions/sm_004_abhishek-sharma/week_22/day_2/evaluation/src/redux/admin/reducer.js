import{ ADD_EMPLOYEE, DELETE_DATA } from "./actionTypes"

let initialState = {
    empList : []
}

const adminReducer = (state = initialState, action) => {
    console.log(state.operatedList, state.empList)
    switch(action.type){
        case ADD_EMPLOYEE:
            return{
                ...state,
                empList: [...state.empList, action.payload],
            }
        case DELETE_DATA:
            return{
                ...state,
                empList: []
            }
        default:
            return state
    }
}

export default adminReducer