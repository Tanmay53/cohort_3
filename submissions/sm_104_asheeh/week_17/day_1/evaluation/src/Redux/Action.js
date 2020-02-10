import {CHECK_USER, DISPAY_MEETING_ROOMS} from "./Type"

const checkUser = (payload) => {
    return {
        type: CHECK_USER,
        payload
    }
}

const displayMeetingRooms = (payload) => {
    return {
        type: DISPAY_MEETING_ROOMS,
        payload
    }
}


export {checkUser, displayMeetingRooms}