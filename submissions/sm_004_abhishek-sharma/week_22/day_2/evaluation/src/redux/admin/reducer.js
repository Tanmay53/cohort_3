import{ ADD_EMPLOYEE } from "./actionTypes"

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
        default:
            return state
    }
}

export default adminReducer