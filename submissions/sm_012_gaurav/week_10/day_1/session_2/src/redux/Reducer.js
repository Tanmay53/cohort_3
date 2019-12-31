import {combineReducers} from 'redux';
import {ADD_ITEM, TOGGLE, DELETE} from './Action';

const todoReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_ITEM:
            return [...state, action.item];
        case TOGGLE:
            return state.map(e => e.item === action.item?{...e, completed:!e.completed}:{...e});
        case DELETE:
            return state.filter(e => e.item !== action.item);
        default:
            return state;
    }
};

const reducer = combineReducers({
    todo: todoReducer
});

export default reducer;