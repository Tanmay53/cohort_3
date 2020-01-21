/** @format */

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const REMOVE_TODO = "REMOVE_TODO";



const addTodo = item => {
  return {
    type: ADD_TODO,
    payload: item
  };
};

const toggleItem = item => {
  return {
    type: TOGGLE_ITEM,
    payload: item
  };
};

const removeTodo = item => {
  return {
    type : REMOVE_TODO,
    payload : item
  }
}

export { addTodo, toggleItem, removeTodo };
