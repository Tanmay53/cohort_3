const initialState = {
    count: 0,
    remainder: 0
}


function counterReducer(state = initialState, action) {

    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + Number(action.payload),
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - Number(action.payload),
            }
        case "MULTIPLY_COUNTER":
            return {
                ...state,
                count: state.count * Number(action.payload)
            }
        case "DIVIDE_COUNTER":
            return {
                ...state,
                count: Math.round(state.count / Number(action.payload))
            }
        case "REMAINDER":
            return {
                ...state,
                count: state.count % Number(action.payload)
            }
        case "INCREMENT_ODD_EVEN":
            console.log("oddEven", action.payload);
            if (Number(action.payload) % 2 === 0)
                return {
                    ...state,
                    count: state.count + 2
                }
            else
                return {
                    ...state,
                    count: state.count + 1
                }
        default:
            return state
    }
}

export default counterReducer