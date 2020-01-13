/** @format */

import { createStore } from "redux";
import reducer from "./reducers/combineReducer";

var initialState = {
  todo: [],
  count: 0
};

export const store = createStore(reducer, initialState);
