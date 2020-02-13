import {FETCH_USERS_REQUEST,
        BOOK_QUOTES,
        SORT_ROOMS,
        FILTER_ROOMS,
        BOOK_ROOMS,
        PAGINATION,
        FETCH_USERS_SUCCESS,
        FETCH_USERS_FAILURE,
        } from "./action"

const initialState = {
    bookRooms: [],
    roomsData : [
        {
            id:1,
            img:'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate:3500,
            floor: "1st" 
        },
        {
            id:2,
            img:'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate:6000,
            floor: "2nd"
        },
        {
            id:3,
            img:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate: 2345,
            floor: "3rd"
        },
        {
            id:4,
            img:'https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate:10000,
            floor: "4th"
        },
        {
            id:5,
            img:'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate:3500,
            floor: "Ground"
        },
        {
            id:6,
            img:'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate:6000,
            floor: "Terrace"
        },
        {
            id:7,
            img:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate:324345,
            floor: "5th"
        },
        {
            id:8,
            img:'https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:10000,
            floor: "6th"
        },
        {
            id:9,
            img:'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:6000,
            floor: "3rd"
        },
        {
            id:10,
            img:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:432654,
            floor: "2nd"
        },
        {
            id:11,
            img:'https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:10000,
            floor: "1st"
        },
        {
            id:12,
            img:'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:6000,
            floor: "3rd"
        },
        {
            id:13,
            img:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:353223,
            floor: "4th"
        },
        {
            id:14,
            img:'https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:10000,
            floor: "6th"
        },
        {
            id:15,
            img:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate:324345,
            floor: "5th"
        },
        {
            id:16,
            img:'https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:10000,
            floor: "6th"
        },
        {
            id:17,
            img:'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:6000,
            floor: "3rd"
        },
        {
            id:18,
            img:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:432654,
            floor: "2nd"
        },
        {
            id:19,
            img:'https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:10000,
            floor: "1st"
        },
        {
            id:20,
            img:'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:6000,
            floor: "3rd"
        },
        {
            id:21,
            img:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:353223,
            floor: "4th"
        },
        {
            id:22,
            img:'https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:10000,
            floor: "6th"
        }
    ],
    isLoading: false,
    query:"",
    data:[],
    error:"",
    orderedRooms: [],
    token: "",
    bookingDetails: [],
    isLogin: false
}

const reducer = (state = initialState, action) => {
switch (action.type) {
    case FETCH_USERS_REQUEST:
        return {
            ...state,
            isLoading: true,
            query: action.query
        }
    case FETCH_USERS_SUCCESS:
        alert(action.data.token)
        return {
            isLoading: false,
            // token: action.data.message,
            error: state.error,
            isLogin: true
        }
    case FETCH_USERS_FAILURE:
        return {
            isLoading: false,
            data: state.data,
            error: action.error
        }
    case BOOK_QUOTES : 
        console.log(action.payload)
        return {
            ...state,
            bookRooms: [...state.bookRooms, action.payload]
        }
    case SORT_ROOMS:
        return {
            ...state,
            roomsData: state.roomsData.sort((a, b) =>  parseInt(a.rate) - parseInt(b.rate))
            
        }
    case FILTER_ROOMS:
        return {
            ...state,
            roomsData: state.roomsData.filter(item => item.type != 'Meeting Rooms')
            
        }
    case BOOK_ROOMS:
        console.log(action)
        return {
            ...state, 
            orderedRooms: state.roomsData.filter(item => action.payload == item.id),
            bookingDetails: [...state.bookingDetails, {...action.transactionDetails}]
        }
    // case PAGINATION:
    //     let pageData = []
    //     let currPage = Number(action.payload)
    //     let perPage = 5
    //     let prevPageEnd = (currPage - 1) * perPage
    //     let currPageEnd = currPage * perPage
    //     for(let i = prevPageEnd; i < currPageEnd; i++){
    //         pageData.push(state.roomsData[i])
    //     }
    //     return {
    //         ...state,
    //         paginationItems: [...pageData]
    //     }
    default:
        return state
    }
}

export {reducer};