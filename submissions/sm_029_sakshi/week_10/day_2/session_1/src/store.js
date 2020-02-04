 import {createStore} from 'redux'
import reducer from './reducer'

var initialState = {
    todo: [],
    count: 0
};  

const store=createStore(reducer,initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
