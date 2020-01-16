const INC_COUNTER = 'INC_COUNTER'
const DEC_COUNTER = 'DEC_COUNTER'
const MULTIPLY_COUNTER = 'MULTIPLY_COUNTER'
const DIVIDE_COUNTER = 'DIVIDE_COUNTER'
const MOD_COUNTER = 'MOD_COUNTER'

const initialState = {
    count: 0
}

const counter = (state = initialState, action) => {
    console.log(state)
    switch(action.type) {
        case INC_COUNTER:
                // console.log('inside reducer increment counter')
            return {
                ...state,
                count: state.count + action.input
            }
        case DEC_COUNTER:
            return {
                ...state,
                count: state.count - action.input
            }
        case MULTIPLY_COUNTER:
            return {
                ...state,
                count: state.count * action.input
            }
        case DIVIDE_COUNTER:
            return {
                ...state,
                count: state.count / action.input
            }
        case MOD_COUNTER:
            return {
                ...state,
                count: state.count % action.input
            }
        default:
            return state
    }
}

export default counter