import { IS_LOGGED_IN, SORT, BOOKING_MEETING_ROOM, FILTER_BY_FLOOR_NUMBER, REGISTERED } from './action'

const initialState = {
    meetingRoomDb : [
        {
            id : 1,
            floor: 1,
            name : 'Meeting room -1',
            capacity : 5,
            price : 5000,
            isBooked : false
        },
        {
            id : 2,
            floor: 1,
            name : 'Meeting room -2',
            capacity : 5,
            price : 5000,
            isBooked : false
        },
        {
            id : 3,
            floor: 1,
            name : 'Meeting room -3',
            capacity : 3,
            price : 3000,
            isBooked : false
        },
        {
            id : 4,
            floor: 2,
            name : 'Meeting room -4',
            capacity : 7,
            price : 7000,
            isBooked : false
        },
        {
            id : 5,
            floor: 2,
            name : 'Meeting room -5',
            capacity : 3,
            price : 3000,
            isBooked : false
        },
        {
            id : 6,
            floor: 2,
            name : 'Meeting room -6',
            capacity : 6,
            price : 6000,
            isBooked : false
        },
        {
            id : 7,
            floor: 3,
            name : 'Meeting room -7',
            capacity : 7,
            price : 7000,
            isBooked : false
        },
        {
            id : 8,
            floor: 3,
            name : 'Meeting room -8',
            capacity : 5,
            pricePerDay : 5000,
            isBooked : false
        },
        {
            id : 9,
            floor: 3,
            name : 'Meeting room -9',
            capacity : 5,
            price : 5000,
            isBooked : false
        },
        {
            id : 10,
            floor: 3,
            name : 'Meeting room -10',
            capacity : 8,
            price : 8000,
            isBooked : false
        },
        {
            id : 11,
            floor: 4,
            name : 'Meeting room -10',
            capacity : 8,
            price : 8000,
            isBooked : false
        }
    ],
    meetingRoomDb2 : [
        {
            id : 1,
            floor: 1,
            name : 'Meeting room -1',
            capacity : 5,
            price : 5000,
            isBooked : false
        },
        {
            id : 2,
            floor: 1,
            name : 'Meeting room -2',
            capacity : 5,
            price : 5000,
            isBooked : false
        },
        {
            id : 3,
            floor: 1,
            name : 'Meeting room -3',
            capacity : 3,
            price : 3000,
            isBooked : false
        },
        {
            id : 4,
            floor: 2,
            name : 'Meeting room -4',
            capacity : 7,
            price : 7000,
            isBooked : false
        },
        {
            id : 5,
            floor: 2,
            name : 'Meeting room -5',
            capacity : 3,
            price : 3000,
            isBooked : false
        },
        {
            id : 6,
            floor: 2,
            name : 'Meeting room -6',
            capacity : 6,
            price : 6000,
            isBooked : false
        },
        {
            id : 7,
            floor: 3,
            name : 'Meeting room -7',
            capacity : 7,
            price : 7000,
            isBooked : false
        },
        {
            id : 8,
            floor: 3,
            name : 'Meeting room -8',
            capacity : 5,
            pricePerDay : 5000,
            isBooked : false
        },
        {
            id : 9,
            floor: 3,
            name : 'Meeting room -9',
            capacity : 5,
            price : 5000,
            isBooked : false
        },
        {
            id : 10,
            floor: 3,
            name : 'Meeting room -10',
            capacity : 8,
            price : 8000,
            isBooked : false
        },
        {
            id : 11,
            floor: 4,
            name : 'Meeting room -10',
            capacity : 8,
            price : 8000,
            isBooked : false
        }
    ],
    notAvailable : [],
    isLoggedIn : false,
    token : '',
    bookingId : 1,
    register : false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case IS_LOGGED_IN:
        return { 
            ...state,
             isLoggedIn : !state.isLoggedIn,
             token : payload
            }
    case BOOKING_MEETING_ROOM:
        let booked = state.meetingRoomDb.filter(e => e.id == payload)
        return {
            ...state,
            bookingId: state.bookingId + 1,
            meetingRoomDb: [...state.meetingRoomDb.filter(e => e.id != payload)],
            notAvailable : [...state.notAvailable, booked[0]]
            // meetingRoomDb2: [...state.meetingRoomDb2.filter(e => e.id != payload)]
        }
    case REGISTERED:
        return{
            ...state,
            register : true
        }
    case SORT:
        let sortBy = payload.sortBy
        let sortName = payload.name
        if( sortBy == 'asc'){
            return {
                ...state,
                meetingRoomDb: [...state.meetingRoomDb.sort((a,b) => a[sortName] - b[sortName] )]
            }
        }
        else if( sortBy == 'desc') {
            return {
                ...state,
                meetingRoomDb: [...state.meetingRoomDb.sort((a,b) => b[sortName] - a[sortName])]
            }
        }
        break
    case FILTER_BY_FLOOR_NUMBER:
        if(payload == 'all'){
            return{
                ...state,
                meetingRoomDb: [...state.meetingRoomDb2]
            }
        }
        else {
            return{
                ...state,
                meetingRoomDb: [...state.meetingRoomDb2.filter(e => e.floor == Number(payload))]
            }
        }
    default:
        return state
    }
}
