export const ADD_TODO = "ADD_TODO";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = item => {
  return {
    type: ADD_TODO,
    payload: item
  };
};

export const toggleItem = item => {
  return {
    type: TOGGLE_ITEM,
    payload: item
  };
};

export const delTodo = item => {
  return {
    type: DELETE_TODO,
    payload: item
  };
};
