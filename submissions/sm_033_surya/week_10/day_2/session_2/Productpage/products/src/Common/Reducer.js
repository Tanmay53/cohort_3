const ADD = "ADD"
const DELETE = "DELETE"
const CART = "CART"
const ORDER = "ORDER"
const CUPDATE = "CUPDATE"
const USERUPDATE = "USERUPDATE"
const ALOGIN = "ALOGIN"

const initialState = {
    mainData: [
        {
            Name: "Nokia x2",
            UUID: "G2345",
            Cost: 20000,
            Description: "superbmobile",
            Category: "mobile",
            imageurl: "https://via.placeholder.com/350x250",
            id: 201
        },
        {
            Name: "LG ",
            UUID: "G2347",
            Cost: 30000,
            Description: "superbmobile",
            Category: "mobile",
            imageurl: "https://via.placeholder.com/350x250",
            id: 202
        }
    ],
    displayData: [
        {
            Name: "Nokia x2",
            UUID: "G2345",
            Cost: 20000,
            Description: "superbmobile",
            Category: "mobile",
            imageurl: "https://via.placeholder.com/350x250",
            id: 201
        },
        {
            Name: "LG ",
            UUID: "G2347",
            Cost: 30000,
            Description: "superbmobile",
            Category: "mobile",
            imageurl: "https://via.placeholder.com/350x250",
            id: 202
        }
    ],
    cartData: [],
    ordersData: [],
    adminlogin: false
}

const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD: {
            return {
                ...state,
                mainData: [...state.mainData, action.playload.data],
                displayData: [...state.displayData, action.playload.data]
            }
        }
        case DELETE: {
            return {
                ...state,
                displayData: state.displayData.filter((ele) => {
                    if (ele.id !== action.playload.id) {
                        return ele
                    }
                })
            }
        }
        case CART: {
            return {
                ...state,
                cartData: [...state.cartData, state.mainData.find((ele) => {
                    if (ele.id === action.playload.id) {
                        return ele
                    }
                })]
            }
        }
        case ORDER: {
            console.log(action, "ordering")
            return {
                ...state,
                ordersData: action.playload.data
            }
        }
        case CUPDATE: {
            return {
                ...state,
                cartData: action.playload.data
            }
        }
        case USERUPDATE: {
            return {
                ...state,
                displayData: state.mainData.map((ele) => ele.id == action.playload.id ? action.playload.data : ele)
            }
        }
        case ALOGIN: {
            return {
                ...state,
                adminlogin: true
            }
        }
        default: {
            return state
        }
    }
}


export default addReducer