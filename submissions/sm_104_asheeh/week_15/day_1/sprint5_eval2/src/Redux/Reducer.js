import {CHECK_USER, ADD_NEW_TOPIC} from "./Type"

const initialState = {
    username: "admin",
    password: "admin",
    isLogin: false,
    topicList: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHECK_USER:
            if(state.username === action.payload.username && state.password === action.payload.password) {
                return {
                    ...state,
                    isLogin: true
                }
            }

        case ADD_NEW_TOPIC:
                return {
                    ...state,
                    topicList: [...state.topicList, action.payload]
                }

        default:
            return state;
    }
}

export {reducer}