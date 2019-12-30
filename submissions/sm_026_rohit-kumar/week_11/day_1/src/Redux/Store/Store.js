import {combineReducers} from 'redux'
import {createStore} from 'redux'
import {reducer} from '../Reducers/Reduer'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'

const store = createStore(reducer, applyMiddleware(thunk))
export {store}