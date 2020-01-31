const FILL = "FILL"
const DIS = "DIS"
const DISTANCE = "DISTANCE"
const HISTORY = "HISTORY"

const initialSate = {
    maindata: [{
        Name: "Hyundai",
        Model: "i10",
        mielage: 35,
        fuel: 50,
        location: "Koramangala",
        cost: 200,
        img: "https://auto.ndtvimg.com/car-images/large/hyundai/grand-i10/hyundai-grand-i10.jpg?v=34",
        id: "1",
    },
    {
        Name: "Hyundai",
        Model: "i20",
        mielage: 30,
        fuel: 45,
        location: "HsrLayout",
        cost: 250,
        img: "https://www.drivespark.com/car-image/640x480x100/car/27843616-hyundai_i20_active.jpg",
        id: "2",
    },
    {
        Name: "Hyundai",
        Model: "Creta",
        mielage: 35,
        fuel: 60,
        location: "Koramangala",
        cost: 300,
        img: "https://imgd.aeplcdn.com/664x374/cw/ec/38331/Hyundai-Creta-Right-Front-Three-Quarter-148200.jpg?wm=0&q=85",
        id: "3",
    },
    {
        Name: "Suzuki",
        Model: "swift",
        mielage: 30,
        fuel: 55,
        location: "HsrLayout",
        cost: 200,
        img: "https://img.gaadicdn.com/images/car-images/360x240/Maruti/Maruti-Swift/6324/Metallic-Silky-SilverN_6f6f6e.jpg",
        id: "4",
    },
    {
        Name: "Suzuki",
        Model: "dZire",
        mielage: 45,
        fuel: 50,
        location: "Jayanagar",
        cost: 200,
        img: "https://imgd.aeplcdn.com/664x374/cw/ec/26860/Maruti-Suzuki-Dzire-Exterior-118637.jpg?wm=0&q=85",
        id: "5",
    },
    {
        Name: "Hyundai",
        Model: "i10",
        mielage: 55,
        fuel: 50,
        location: "Yeshwathpur",
        cost: 200,
        img: "https://auto.ndtvimg.com/car-images/large/hyundai/grand-i10/hyundai-grand-i10.jpg?v=34",
        id: "6",
    },
    {
        Name: "Suzuki",
        Model: "swift",
        mielage: 30,
        fuel: 55,
        location: "Jayanagar",
        cost: 200,
        img: "https://img.gaadicdn.com/images/car-images/360x240/Maruti/Maruti-Swift/6324/Metallic-Silky-SilverN_6f6f6e.jpg",
        id: "4",
    },
    {
        Name: "Suzuki",
        Model: "dZire",
        mielage: 45,
        fuel: 50,
        location: "Hebbala",
        cost: 200,
        img: "https://imgd.aeplcdn.com/664x374/cw/ec/26860/Maruti-Suzuki-Dzire-Exterior-118637.jpg?wm=0&q=85",
        id: "5",
    },
    {
        Name: "Hyundai",
        Model: "i10",
        mielage: 55,
        fuel: 50,
        location: "Indiranagar",
        cost: 200,
        img: "https://auto.ndtvimg.com/car-images/large/hyundai/grand-i10/hyundai-grand-i10.jpg?v=34",
        id: "6",
    }],
    displaydata: [],
    historyData: []
}

const bookingReducer = (state = initialSate, action) => {
    switch (action.type) {
        case DIS: {
            return {
                ...state,
                displaydata: state.maindata
            }
        }
        case FILL: {
            console.log(state.displaydata)
            return {
                ...state,
                displaydata: state.maindata.filter((ele) => {
                    if (ele.location == action.data) {
                        return ele
                    }
                })
            }
        }
        case DISTANCE: {
            console.log(action)
            return {
                ...state,
                displaydata: state.displaydata.map((ele) =>
                    ele.id == action.id ? ({ ...ele, distance: action.value, destiny: action.to }) : ele)
            }
        }
        case HISTORY: {
            // console.log(action)
            return {
                ...state,
                historyData: [...state.historyData, action.data]
            }
        }
        default: {
            return state
        }
    }
}

export default bookingReducer