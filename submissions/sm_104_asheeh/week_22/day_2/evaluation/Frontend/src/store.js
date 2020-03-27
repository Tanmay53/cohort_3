import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import authReducer from './Redux/Authorization/Reducer'
import albumsReducer from './Redux/Albums/Reducer'

const rootReducer = combineReducers({authReducer, albumsReducer })

const store = createStore(rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
export {store};