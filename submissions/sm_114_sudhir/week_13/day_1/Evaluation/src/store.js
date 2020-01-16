import { createStore } from 'redux'
import loginReducer from './redux/reducer'

export const store = createStore(loginReducer)