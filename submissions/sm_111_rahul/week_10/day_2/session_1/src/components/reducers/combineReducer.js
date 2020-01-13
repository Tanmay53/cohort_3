/** @format */

import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import countReducer from "./countReducer";
const reducer = combineReducers({
  todo: todoReducer,
  count: countReducer
});
export default reducer;
