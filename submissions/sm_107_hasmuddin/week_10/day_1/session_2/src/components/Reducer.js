import { combineReducers } from "redux";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "TOGGLE_ITEM":
      const updated = action.payload;
      const newState = state.map(item =>
        item.itemName === updated.itemName
          ? { ...item, completed: !item.completed }
          : item
      );
      return newState;

    case "DELETE_ITEM":
      const deleteItem = action.payload;
      const filteredState = state.filter(
        item => item.itemName !== deleteItem.itemName
      );
      return filteredState;
    default:
      return state;
  }
};

const reducer = combineReducers({
  todo: todoReducer
});

export default reducer;
