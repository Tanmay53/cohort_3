import {combineReducers} from 'redux'
import {MULTIPLY, DIVIDE, REMINDER, INCREMENT} from './actions'

var initialState={
    count:0,
    ops:1
}

export const operationsReducers=(state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            if(action.item%2==0){
                return {...state, count: state.count+2}
            }
            else{
                return {...state, count: state.count+2}
            }
        case MULTIPLY:
            return {...state, ops: state.count*Number(action.item)}
        case DIVIDE:
            return {...state, ops: (state.count/(Number(action.item))).toFixed(3)}
        case REMINDER:
            return {...state, ops: state.count%(Number(action.item))}
        default:
            return state
    }
}



// export const reducers= combineReducers({
//     operations:operationsReducers
// })