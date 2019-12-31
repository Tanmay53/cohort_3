import { ADD_TODO, DONE, DELETE } from "./action";

const initialState = {
    todo: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todo: [
                    ...state.todo,
                    { itemName: action.payload, completed: false }
                ]
            };
        case DONE:
            console.log("Done clicked:", action.payload);
            return {
                todo: state.todo.map(ele =>
                    ele.itemName === action.payload
                        ? {
                              itemName: ele.itemName,
                              completed: !ele.completed
                          }
                        : ele
                )
            };
        case DELETE:
            return {
                todo: state.todo.filter(ele => ele.itemName !== action.payload)
            };
        default:
            return state;
    }
};

export default reducer;
