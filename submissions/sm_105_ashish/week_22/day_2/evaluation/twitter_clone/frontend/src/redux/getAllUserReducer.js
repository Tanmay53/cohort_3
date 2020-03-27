import {FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED } from "./getalluser_action"


const allUserStore = {
allUsers:[]
}

const AllUserReducer = (state = allUserStore,action) => {

    switch (action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state
            }
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                allUsers:[...action.data.users]
            }
        case FETCH_USER_FAILED:
            return {
                ...state
            }

        default:
            return state
    }

}

export {AllUserReducer}
