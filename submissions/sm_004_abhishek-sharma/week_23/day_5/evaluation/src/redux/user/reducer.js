import{ ADD_PRODUCT, EMPTY_DATA, CHANGE_PAGE } from "./actionTypes"

let initialState = {
    groceryList : [],
    page: 1,
    perPage: 10
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT:
            return{
                ...state,
                groceryList: [...state.groceryList, action.payload]
            }
        case EMPTY_DATA:
            return{
                ...state,
                groceryList: [],
                page: 1,
                perPage:10,
            }
        case CHANGE_PAGE:
            return{
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}

export default userReducer