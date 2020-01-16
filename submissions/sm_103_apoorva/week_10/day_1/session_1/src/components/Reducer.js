import {ADD_COUNT,SUBTRACT_COUNT,MUL_COUNT,DIV_COUNT,MODULO_COUNT} from './Action'

const initialState = {
    count: 0
}

const Reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case ADD_COUNT:
            return{count: state.count + action.payload}
        case SUBTRACT_COUNT:
            return{count: state.count - action.payload}
        case MUL_COUNT:
            return{count: state.count * action.payload}
        case DIV_COUNT:
            return{count: state.count / action.payload}
        case MODULO_COUNT:
            return{count: state.count % action.payload}
        default:
            return state
    }
}

export default Reducer