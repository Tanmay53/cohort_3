import {createStore} from "redux"
import {reducer} from '../reducer/reducer'

const loginState = { // redux store.
  login : false
}

const store = createStore(reducer,loginState)

export default store