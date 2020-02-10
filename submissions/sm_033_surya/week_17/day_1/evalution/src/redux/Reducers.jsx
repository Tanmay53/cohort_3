const GETDATA = "GETDATA"
const FETCHDATA = "FETCHDATA"
const GETITEM = "GETITEM"
const CONFIRM = "CONFIRM"
const SORTING = "SORTING"
const FILTERING = "FILTERING"

const initialstate = {
    mainData: [{
        floorNo: "1",
        roomName: "S101",
        capacity: "5",
        price: "300",
        bookingStatus: false,
        date: "2020-02-10"

    },
    {
        floorNo: "2",
        roomName: "S201",
        capacity: "4",
        price: "250",
        bookingStatus: false,
        date: "2020-02-12"

    },
    {
        floorNo: "3",
        roomName: "S301",
        capacity: "4",
        price: "250",
        bookingStatus: false,
        date: "2020-02-13"

    },
    {
        floorNo: "3",
        roomName: "S304",
        capacity: "6",
        price: "400",
        bookingStatus: false,
        date: "2020-02-10"

    },
    {
        floorNo: "2",
        roomName: "S206",
        capacity: "4",
        price: "250",
        bookingStatus: false,
        date: "2020-02-12"

    },
    {
        floorNo: "1",
        roomName: "S104",
        capacity: "5",
        price: "400",
        bookingStatus: false,
        date: "2020-02-13"
    },
    {
        floorNo: "2",
        roomName: "S210",
        capacity: "15",
        price: "1300",
        bookingStatus: false,
        date: "2020-02-13"
    }
        ,
    {
        floorNo: "3",
        roomName: "S309",
        capacity: "5",
        price: "200",
        bookingStatus: false,
        date: "2020-02-13"
    },
    {
        floorNo: "2",
        roomName: "S207",
        capacity: "4",
        price: "250",
        bookingStatus: false,
        date: "2020-02-12"

    },
    {
        floorNo: "4",
        roomName: "S402",
        capacity: "2",
        price: "150",
        bookingStatus: false,
        date: "2020-02-13"
    },
    {
        floorNo: "2",
        roomName: "S205",
        capacity: "8",
        price: "700",
        bookingStatus: false,
        date: "2020-02-13"
    }
        ,
    {
        floorNo: "4",
        roomName: "S403",
        capacity: "6",
        price: "400",
        bookingStatus: false,
        date: "2020-02-13"
    },
    {
        floorNo: "1",
        roomName: "S106",
        capacity: "6",
        price: "400",
        bookingStatus: false,
        date: "2020-02-13"
    }
    ],
    displayData: []
}


const mainReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GETDATA: {
            return {
                ...state,
                displayData: state.mainData.filter((ele) => {
                    if (ele.roomName == action.payload.text && ele.bookingStatus == false) {
                        return ele
                    }
                })
            }
        }
        case FETCHDATA: {
            return {
                ...state,
                displayData: state.mainData.filter((ele) => {
                    if (!ele.bookingStatus) {
                        return ele
                    }
                })
            }
        }
        case GETITEM: {
            console.log(action.payload);
            return {
                ...state,
                displayData: state.mainData.filter((ele) => {
                    if (ele.roomName == action.payload) {
                        return ele
                    }
                })
            }
        }
        case CONFIRM: {
            return {
                ...state,
                displayData: state.mainData.filter((ele) => {
                    if (ele.roomName == action.payload) {
                        ele.bookingStatus = true
                    }
                })
            }
        }
        case SORTING: {
            console.log(action.payload)
            if (action.payload) {
                return {
                    ...state,
                    displayData: state.mainData.sort((a, b) => Number(a.price) - Number(b.price))
                }
            }
            else {
                return {
                    ...state,
                    displayData: state.mainData.sort((a, b) => Number(b.price) - Number(a.price))
                }
            }
        }
        case FILTERING: {
            console.log(action.payload)
            return {
                ...state,
                displayData: state.mainData.filter((ele) => {
                    if (ele.floorNo == action.payload) {
                        return ele
                    }
                })
            }
        }
        default: {
            return state
        }
    }
}
export default mainReducer