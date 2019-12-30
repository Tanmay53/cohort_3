import { createStore } from "redux";
import reducer from "./Reducer";

const initialState = {
    count: 0
};

const store = createStore(reducer, initialState);
console.log(store.getState());
console.log("store arrived");
export default store;
