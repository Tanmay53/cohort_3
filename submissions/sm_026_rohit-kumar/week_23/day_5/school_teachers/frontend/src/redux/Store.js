import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {loginReducer} from './Reducer'
import {teacherReducer} from './teacherReducer'

const reduer = combineReducers({
    login: loginReducer,
    teacher: teacherReducer
})

const store = createStore(reduer, applyMiddleware(thunk))
store.subscribe(() => {
    console.log('redux state : ', store.getState())
})

export default store