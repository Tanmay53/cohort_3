const INC_COUNTER = "INC_COUNTER"; // This is the type of the action

const DEC_COUNTER = "DEC_COUNTER"; // This is the type of the action

const INITIATE = "INITIATE";
const ODD = "ODD"
const DIVIDE = "DIVIDE"
const MULTIPLY = "MULTIPLY"
const REMINDER = "REMINDER"

const initialState = {
    count: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER:
            return {
                count: state.count + action.amount
            }
        case DEC_COUNTER:
            return {
                count: state.count - action.amount
            }
        case INITIATE: {
            return {
                count: action.amount
            }
        }
        case ODD: {
            if (state.count % 2 == 0) {
                return {
                    count: state.count + 2
                }
            }
            else {
                return {
                    count: state.count + 1
                }
            }
        }
        case MULTIPLY: {
            return {
                count: state.count * action.amount
            }
        }
        case DIVIDE: {
            return {
                count: state.count / action.amount
            }
        }
        case REMINDER: {
            return {
                count: state.count % action.amount
            }
        }

        default:
            return state
    }
}

export default counter; 