const ADD_TODO = "ADD_TODO";
const TOGGLE_ITEM = "TOGGLE_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const addTodo = item => ({
    type: ADD_TODO,
    payload: item
});

const toggleItem = item => ({
    type: TOGGLE_ITEM,
    payload: item
});

const deleteItem = item => ({
    type: DELETE_ITEM,
    payload: item
});

export { ADD_TODO, TOGGLE_ITEM, addTodo, toggleItem, deleteItem, DELETE_ITEM };
