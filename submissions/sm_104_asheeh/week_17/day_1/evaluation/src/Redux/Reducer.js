import { CHECK_USER, DISPAY_MEETING_ROOMS } from "./Type"

const initialState = {
    username: "admin",
    password: "admin",
    isLogin: false,
    meetingRoomsList: [
        {
            roomName: "Cubical",
            capacity: "10",
            pricePerDay: "3000",
            floor: "Ground Floor"
        },
        {
            roomName: "Cubical",
            capacity: "10",
            pricePerDay: "3000",
            floor: "Ground Floor"
        },
        {
            roomName: "Cubical",
            capacity: "10",
            pricePerDay: "3000",
            floor: "Ground Floor"
        },
        {
            roomName: "Cubical",
            capacity: "10",
            pricePerDay: "3000",
            floor: "Ground Floor"
        },
        {
            roomName: "Cubical",
            capacity: "10",
            pricePerDay: "3000",
            floor: "Ground Floor"
        }
    ]
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

        case DISPAY_MEETING_ROOMS:
            return {
                ...state
                // meetingRoomsList
            }

        default: return state
    }
}

export {reducer}