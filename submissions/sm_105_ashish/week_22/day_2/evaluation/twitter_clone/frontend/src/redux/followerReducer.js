import {FETCH_FOLLOW_REQUEST,
    FETCH_FOLLOW_SUCCESS,
    FETCH_FOLLOW_FAILED } from "../redux/followerAction"


const followers = {
followers:[]
}

const followerReducer = (state = followers,action) => {

    switch (action.type){
        
        case FETCH_FOLLOW_REQUEST:
            return {
                ...state
            }
        case FETCH_FOLLOW_SUCCESS:
            console.log(action.data)
            return{
                ...state,
            }
        case FETCH_FOLLOW_FAILED:
            return {
                ...state
            }

        default:
            return state
    }

}

export {followerReducer}
