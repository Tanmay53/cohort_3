const addTodo = item => ({
  type: "ADD_TODO",
  payload: item
});

const toggleItem = item => ({
  type: "TOGGLE_ITEM",
  payload: item
});

const deleteItem = item => ({
  type: "DELETE_ITEM",
  payload: item
});

export { addTodo, toggleItem, deleteItem };
