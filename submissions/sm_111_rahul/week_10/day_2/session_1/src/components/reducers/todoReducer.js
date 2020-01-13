/** @format */

import { ADD_TODO } from "../actions/addTodo";
import { TOGGLE_ITEM } from "../actions/toggleTodo";
import { REMOVE_TODO } from "../actions/removeTodo";

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

export default todoReducer;
