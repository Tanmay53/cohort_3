import {createStore} from "redux"
import {reducer} from '../reducer/reducer'

const loginState = {
  login : true
}

const store = createStore(reducer,loginState)

export default store