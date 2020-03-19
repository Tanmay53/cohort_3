const initialState = {
    employees_data: undefined,
    Auth: {}
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_RES":
            return {
                ...state,
                employees_data: action.payload
            }
        case "LOGIN":
            return {
                ...state,
                Auth: action.payload
            }
        case "REGISTER":
            return {
                ...state,
                Auth: action.payload
            }

        default: return state
    }
}

export default Reducer