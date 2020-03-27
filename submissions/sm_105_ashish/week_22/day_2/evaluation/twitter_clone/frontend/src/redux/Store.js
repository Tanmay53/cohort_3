import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {commonReducer} from './Reducer'
import {blogReducer} from "./BlogReducer"
import {AllUserReducer} from "./getAllUserReducer"
import {followerReducer} from "./followerReducer"


const rootReducer = combineReducers({commonReducer:commonReducer,blogReducer:blogReducer,AllUserReducer:AllUserReducer,followerReducer:followerReducer})


const store = createStore(rootReducer,
   compose(applyMiddleware(thunk),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ))

export {store}