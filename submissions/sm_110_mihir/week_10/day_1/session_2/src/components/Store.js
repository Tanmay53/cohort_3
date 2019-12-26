import { createStore } from "redux";
import reducer from "./Reducer";

var initialState = {
    todo: [],
    count: 0
};

const store = createStore(reducer, initialState);

console.log(store.getState());

export default store;
