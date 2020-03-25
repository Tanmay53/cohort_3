import {createStore,applyMiddleware,compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './Reducer'
import busReducer from '../redux/bus/Reducer'
import cityReducer from '../redux/get_cities/reducer'


const rootReducer = combineReducers({
   "commonReducer": reducer,
   "busReducer": busReducer,
   "cityReducer": cityReducer,
})

const store = createStore(rootReducer,
   compose(applyMiddleware(thunk),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ))

export { store }