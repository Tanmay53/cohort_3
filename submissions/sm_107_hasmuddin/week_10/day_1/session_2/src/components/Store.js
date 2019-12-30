import { createStore } from "redux";
import reducer from "./Reducer";

const initialState = {
  todo: []
};

let store = createStore(reducer, initialState);
console.log(store.getState());

export default store;
