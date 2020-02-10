import {combineReducers, createStore} from 'redux'
import {loginReducer} from '../redux/reducers/loginReducer'
import {roomReducer} from '../redux/reducers/roomReduer'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'

const reducer = combineReducers({
    login: loginReducer,
    room: roomReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export {store}