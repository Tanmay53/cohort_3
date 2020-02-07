import {createStore} from 'redux'
import todoReducer from './reducer'

const storeData = createStore (todoReducer)
// console.log(storeData)

export default storeData 
