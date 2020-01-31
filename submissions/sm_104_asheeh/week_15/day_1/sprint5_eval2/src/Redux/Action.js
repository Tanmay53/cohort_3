import {CHECK_USER, ADD_NEW_TOPIC} from "./Type"

const checkUser = (payload) => {
    return {
        type: CHECK_USER,
        payload
    }
}

const addNewTopic = (payload) => {
    return {
        type: ADD_NEW_TOPIC,
        payload
    }
}


export {checkUser, addNewTopic}