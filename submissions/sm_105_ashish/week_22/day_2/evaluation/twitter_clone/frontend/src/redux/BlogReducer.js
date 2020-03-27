import {FETCH_TWEET_REQUEST,
    FETCH_TWEET_SUCCESS,
    FETCH_TWEET_FAILED } from "../redux/BlogAction"


const categoryStore = {
tweets:[]
}

const blogReducer = (state = categoryStore,action) => {

    switch (action.type){
        
        case FETCH_TWEET_REQUEST:
            return {
                ...state
            }
        case FETCH_TWEET_SUCCESS:
            console.log(action.data)
            return{
                ...state,
                tweets:[...action.data.tweets]
            }
        case FETCH_TWEET_FAILED:
            return {
                ...state
            }

        default:
            return state
    }

}

export {blogReducer}
