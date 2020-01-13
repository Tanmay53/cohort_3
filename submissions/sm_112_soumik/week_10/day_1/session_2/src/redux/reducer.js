import { ADD_TODO } from "./action";
import { TOGGLE_ITEM } from "./action";
import { DELETE_TODO } from "./action";

const initial_state = {
  todo: [],
  completed: []
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todo: [...state.todo, action.payload]
      };
    case TOGGLE_ITEM:
      console.log(action.payload.item);
      let name = action.payload.item;
      const newArr = state.todo.map(ele =>
        ele.item === name ? { ...ele, completed: !ele.completed } : ele
      );
      return {
        todo: newArr
      };
    case DELETE_TODO:
      console.log("on del", action.payload);
      let del = action.payload.item;
      console.log("to del", del);
      const filteredArr = state.todo.filter(ele => ele.item !== del);
      return {
        todo: filteredArr
      };
    default:
      return state;
  }
};

export default reducer;
