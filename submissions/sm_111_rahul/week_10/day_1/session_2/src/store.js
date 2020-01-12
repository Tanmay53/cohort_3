/** @format */

import { createStore } from "redux";
import reducer from "./reducer";

var initialState = {
  todo: [],
  count: 0
};

const store = createStore(reducer, initialState);

export default store;
