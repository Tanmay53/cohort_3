import { combineReducers } from "redux";
import { INC_COUNTER, DEC_COUNTER, MULTIPLY, DIVIDE, MODULUS } from "./Action";

const Reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case INC_COUNTER:
            return {
                count: state.count + action.payload
            };
        case DEC_COUNTER:
            return {
                count: state.count - action.payload
            };
        case MULTIPLY:
            return {
                count: state.count * action.payload
            };
        case DIVIDE:
            return {
                count: state.count / action.payload
            };

        case MODULUS:
            return {
                count: state.count % action.payload
            };

        default:
            return state;
    }
};

export default Reducer;
