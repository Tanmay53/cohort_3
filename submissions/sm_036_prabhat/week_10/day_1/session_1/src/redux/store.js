import { createStore } from 'redux';
import rcountReducers from './reducers'

const store = createStore(rcountReducers)

export default store