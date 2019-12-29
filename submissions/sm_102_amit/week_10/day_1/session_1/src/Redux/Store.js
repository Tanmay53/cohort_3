import { createStore } from "redux";
import reducer from "./Reducer";

const initialState = {
  count: 0
};

const store = createStore(reducer, initialState);
console.log("Initial State: ", store.getState());

export default store;
