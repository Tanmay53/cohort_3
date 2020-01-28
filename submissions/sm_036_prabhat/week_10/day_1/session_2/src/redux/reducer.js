import { combineReducers } from "redux";
import { ADD_TODO, TOGGLE_ITEM, DELETE_ITEM } from "./action";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // console.log(state)
      return [...state, action.payload];
    case TOGGLE_ITEM:
      const updateItem = action.payload;
      return state.map(item => item.itemName === updateItem.itemName ? { ...item, completed:!item.completed } : item);
    case DELETE_ITEM:
      const updateIndex = action.payload;
      return state.filter((item, index) => index !== updateIndex);
    default:
      return state;
  }
};

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_TODO":
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
