import { ADD_TODO, TOGGLE_ITEM, DELETE_ITEM } from "./action";
// const ADD_TODO = "ADD_TODO"
// const TOGGLE_ITEM = "TOGGLE_ITEM"
// const DELETE_ITEM = "DELETE_ITEM"


const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(state)
      console.log("Argument received", action.payload.itemName)
      return [...state, action.payload];
    case TOGGLE_ITEM:
      const updateItem = action.payload;
      return state.map(item => item.itemName === updateItem.itemName ? { ...item, completed: !item.completed } : item);
    case DELETE_ITEM:
      const updateIndex = action.payload;
      return state.filter((item, index) => index !== updateIndex);
    default:
      return state;
  }
};

export default todoReducer