import { combineReducers } from "redux";
import { ADD_TODO, TOGGLE_ITEM, DELETE_ITEM } from "./Action";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case TOGGLE_ITEM:
            const updateItem = action.payload;
            const newState = state.map(item =>
                item.itemName === updateItem.itemName
                    ? { ...item, completed: !item.completed }
                    : item
            );
            return newState;
        case DELETE_ITEM:
            const deleteItem = action.payload;
            const filteredState = state.filter(
                item => item.itemName !== deleteItem.itemName
            );
            return filteredState;
        default:
            return state;
    }
};

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case ADD_TODO:
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
