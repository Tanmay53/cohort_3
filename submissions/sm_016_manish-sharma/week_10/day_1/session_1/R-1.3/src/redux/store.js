import {createStore} from 'redux'
import {operationsReducers} from './reducers'



const store = createStore(operationsReducers)

console.log(store.getState())

export default store