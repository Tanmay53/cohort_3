import {combineReducers} from 'redux'
import {INCREMENT} from './actions'

const inc1Reducer=(state=0,action)=>{
    if(action.type == INCREMENT){
        if(Number(action.item)%2==0){
            return state+2
        }
        else{
            return state+1
        }
    }
    return state
}

export const reducers= combineReducers({
    count1:inc1Reducer
})