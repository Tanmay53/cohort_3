import {createStore} from 'redux'
import addReducer from './component/redux/reducer'

export const store = createStore(addReducer)