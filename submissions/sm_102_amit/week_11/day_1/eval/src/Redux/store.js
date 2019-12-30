import { createStore } from "redux";
import reducer from "./reducer";

var initialState = {
  customers: []
};

const store = createStore(initialState, reducer);

export default store;
