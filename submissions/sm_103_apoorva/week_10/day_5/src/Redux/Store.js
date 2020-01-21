import {createStore, applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Reducer,SignInReducer} from './Reducer'

const store = createStore(combineReducers({
    signup : Reducer,
    signin : SignInReducer
}), applyMiddleware(thunk))
export {store, Reducer}