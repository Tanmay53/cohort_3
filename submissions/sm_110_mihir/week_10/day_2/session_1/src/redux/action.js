export const ADD_TODO = "ADD_TODO";
export const DONE = "DONE";
export const DELETE = "DELETE";
export const addTodo = content => ({
    type: ADD_TODO,
    payload: content
});

export const done = content => ({
    type: DONE,
    payload: content
});

export const del = content => ({
    type: DELETE,
    payload: content
});
