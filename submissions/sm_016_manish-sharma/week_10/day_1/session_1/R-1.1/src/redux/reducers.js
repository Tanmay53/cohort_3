import {combineReducers} from 'redux'
import {INCREMENT, DECREMENT} from './actions'

const countReducer=(state=0,action)=>{
    switch(action.type){
        case INCREMENT:
            return state+Number(action.item)
        case DECREMENT:
            return state-Number(action.item)
        default:
            return state
    }
}

export const reducers= combineReducers({
    count:countReducer
})