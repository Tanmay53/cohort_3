import { ADD_VAL, DEC_VAL, ADD_VAL_TYPE, MUL_VAL, DIV_VAL, REM_VAL } from './Action';
import { combineReducers } from 'redux';

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case ADD_VAL:
            return state + action.factor;
        case DEC_VAL:
            return state - action.factor;
        case ADD_VAL_TYPE:
            return (action.factor % 2 === 0) ? state + 2 : state + 1;
        case MUL_VAL:
            return state * action.factor;
        case DIV_VAL:
            return state / action.factor;
        case REM_VAL:
            return state % action.factor;
        default:
            return state;
    }
};

const reducer = combineReducers({
    count: countReducer
});

export default reducer;
