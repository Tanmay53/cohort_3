const ADD = "ADD"
const MANU = "MANU"
const PRICE = "PRICE"
const UPDATE = "UPDATE"
const CHECK = "CHECK"
const LOGOUT = "LOGOUT"
const FILLTER = "FILLTER"

const initialState = {
    maindata: [],
    displayData: []
}
const loginstate = {
    login: false
}
const userLogin = (state = loginstate, action) => {
    switch (action.type) {
        case CHECK: {
            return {
                ...state,
                login: true
            }
        }
        case LOGOUT: {
            return {
                ...state,
                login: false
            }
        }
        default: {
            return state
        }
    }
}
const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD: {
            return {
                ...state,
                maindata: [...state.maindata, action.playload.data],
                displayData: [...state.maindata, action.playload.data]
            }
        }
        case MANU: {
            if (action.isSorted) {
                let temp = state.maindata
                temp.sort((a, b) => a.manufacture > b.manufacture ? 1 : -1)
                console.log(temp, "hhhh")
                return {
                    ...state,
                    displayData: temp
                }
            }
            else {
                let temp = state.maindata
                temp.sort((a, b) => a.manufacture < b.manufacture ? 1 : -1)
                console.log(temp, "hhhh")
                return {
                    ...state,
                    displayData: temp
                }
            }
        }
        case PRICE: {
            if (action.isSorted) {
                let temp = state.maindata
                temp.sort((a, b) => a.price - b.price)
                console.log(temp, "hhhh")
                return {
                    ...state,
                    displayData: temp
                }
            }
            else {
                let temp = state.maindata
                temp.sort((a, b) => b.price - a.price)
                console.log(temp, "hhhh")
                return {
                    ...state,
                    displayData: temp
                }
            }
        }
        case UPDATE: {
            return {
                ...state,
                displayData: state.maindata.map((ele) => ele.id == action.playload.id ? action.playload.data : ele)
            }
        }
        case FILLTER: {
            let temp = state.maindata.filter((ele) => (ele.mileage >= action.value))
            return {
                ...state,
                displayData: temp
            }
        }
        default: {
            return state
        }
    }
}
export { addReducer, userLogin } 