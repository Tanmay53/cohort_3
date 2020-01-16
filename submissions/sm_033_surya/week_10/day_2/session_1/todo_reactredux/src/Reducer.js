const ADD = "ADD"
const DEL = "DEL"
const TOGGLE = "TOGGLE"

const todoReducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case ADD: {
            return [...state, action.playload]
        }
        case DEL: {
            var id = action.id
            let newstate = state.filter((ele) => {
                if (ele.id !== id) {
                    return ele
                }
            })
            return newstate
        }
        case TOGGLE: {
            let id = action.id
            let newstate = state.map((ele) => ele.id == id ? { ...ele, completed: !ele.completed } : ele)
            return newstate
        }
        default: {
            return state
        }
    }
}

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case ADD: {
            return state + 1
        }
        case DEL: {
            if (!action.completed) {
                return state - 1
            }
            else {
                return state
            }
        }
        case TOGGLE: {
            if (!action.completed) {
                return state - 1
            }
            else {
                return state + 1
            }
        }
        default: {
            return state
        }
    }
}

export { todoReducer, countReducer }