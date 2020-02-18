import {INC_COUNTER, DEC_COUNTER, INC_ODD_EVEN, MUL, DIV, REM} from './action'

const initialState = {
    count : 0
}

const counter = (state = initialState, action) => {
    switch(action.type){
        case INC_COUNTER:
            return {
                count : state.count + action.amount
            }
        case DEC_COUNTER:
            return {
                count : state.count - action.amount
            }
        case INC_ODD_EVEN:
            return {
                count : state.count + action.amount
            }
        case MUL:
            return {
                count : state.count*action.amount
            }
        case DIV:
            return {
                count : Math.floor(state.count/action.amount)
            }
            case REM:
                return {
                    count : state.count%action.amount
                }
        default : 
            return state
    }
}

export default counter
