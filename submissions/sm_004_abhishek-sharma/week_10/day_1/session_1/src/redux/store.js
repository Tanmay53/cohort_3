import {createStore} from 'redux'
import reducer from './reducer'

const initialState = {
    count : 0
}

const store = createStore(reducer,initialState)
console.log(store.getState(), "initial")

export default store