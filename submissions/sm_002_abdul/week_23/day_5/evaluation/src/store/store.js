import {createStore} from "redux"
import {reducer} from '../reducer/reducer'

const loginState = {
  login : false
}

const store = createStore(reducer,loginState)

export default store