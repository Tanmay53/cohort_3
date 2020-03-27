import {createStore, combineReducers} from 'redux'
import {loginReducer} from './Reducer'
import {teacherReducer} from './teacherReducer'

const reduer = combineReducers({
    login: loginReducer,
    teacher: teacherReducer
})

const store = createStore(reduer)
store.subscribe(() => {
    console.log('redux state : ', store.getState())
})

export default store