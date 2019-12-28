export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE = "TOGGLE";
export const DELETE = "DELETE";

export const addItem = (val) => ({
    type: ADD_ITEM,
    item: val
});

export const toggleItem = (val) => ({
    type: TOGGLE,
    item: val
});

export const deleteItem = (val) => ({
    type: DELETE,
    item: val
});