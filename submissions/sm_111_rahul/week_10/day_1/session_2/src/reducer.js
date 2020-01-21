/** @format */

import { combineReducers } from "redux";
import { ADD_TODO, TOGGLE_ITEM, REMOVE_TODO } from "./action";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_ITEM:
      const updateItem = action.payload;
      let newState = state.map(item =>
        item.itemName === updateItem.itemName
          ? { ...item, completed: !item.completed }
          : item
      );
      return newState;
    case REMOVE_TODO:
      const removeItem = action.payload;
      let newState1 = state.filter(item => {
        return item.itemName !== removeItem.itemName;
      });
      return newState1;

    default:
      return state;
  }
};

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state + 1;
    default:
      return state;
  }
};

const reducer = combineReducers({
  todo: todoReducer,
  count: countReducer
});
export default reducer;
